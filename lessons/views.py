from django.shortcuts import render , get_object_or_404 
from pydub import AudioSegment  # Make sure to import the necessary library
# Create your views here.
from django.db.models import Count , Sum
from django.shortcuts import render , redirect
from django.http import  JsonResponse , HttpResponse
from lessons.models import * 
from django.contrib.auth.models import User 
import os 
        
def index(request):
    # categores = Categorys.objects.filter( parent=None).annotate(num_lessons=Count('lessons'))
    categores = Categorys.objects.filter(parent=None).annotate( num_lessons=Count('lessons'), total_duration=Sum('lessons__duration'))
    return render(request, 'category.html', {"categores": categores})

def categories_detail(request, category_id):
    # Get the main category
    main_category = get_object_or_404(Categorys, pk=category_id)

    # Get child categories if they exist
    child_categories = main_category.children.all()
    parent = main_category.parent  # Parent category if it exists
    
    if child_categories:
        # Display child categories
        return render(request, 'categories_detail.html', {
            "main_category": main_category,
            "child_categories": child_categories,
            "parent": parent,  # Pass parent to the template
        })
    else:
        # No child categories, so get lessons inside the main category
        lessons = Lessons.objects.filter(category=main_category)

        return render(request, 'categories_detail.html', {
            "main_category": main_category,
            "lessons": lessons,
        })

def child_category_detail(request, category_id):
    # Get the child category if it exists, otherwise get lessons inside the main category
    child_category = get_object_or_404(Categorys, pk=category_id)
    lessons = Lessons.objects.filter(category=child_category)
    parent = child_category.parent


    return render(request, 'categories_detail.html', {
        "child_category": child_category,
        "lessons": lessons,
        "parent": parent,  # Pass parent to the template
    })

def incres_the_views_to_categorey(request, parent_id):
    lesson_id = request.POST['categorys_id']
    print(lesson_id)
    
    categorys = Categorys.objects.get(id=lesson_id)
    categorys.number_of_views += 1
    categorys.save()
    return JsonResponse({"status":"incresed successfuly ! "})

def add_to_favforet(request , lesson_id):
    if request.user.is_authenticated:
        if request.method == "POST":
            user = User.objects.get(username=request.user)
            lesson_id = request.POST['lesson_id']
            print(lesson_id)
            print(user)
            lesson = Lessons.objects.get(pk=lesson_id)
            print(lesson.id)
            if not Favforet_list.objects.filter(user=user , lesson=lesson.id ).first():
                create = Favforet_list.objects.create(user=user, lesson=lesson)
                create.save()
                return JsonResponse({"status": "تمت إضاقة الدرس للمفضلة بنجاح   "})
            else:
                Favforet_list.objects.get(user=user, lesson=lesson).delete()
                return JsonResponse({"status": "تمت إزالة الدرس من المفضلة بنجاح   "})
        else:
            return redirect('/')
    else:
        return JsonResponse({"status":"يجب تسجيل الدخول اولا   "})
    
def favforet_list(request):
    user = User.objects.get(username=request.user)    
    favforet_list = Favforet_list.objects.filter(user=user.id)
    return render(request, 'lessons/fav_list.html' , {"favforet_list":favforet_list})


def search(request):
    query = request.GET.get('productsearch', '')
# name
# file
# url
# category
# user
# description
# tags
# number_of_views
# create_at
# update_at
# type_of_file
# size
# duration
    books = Lessons.objects.filter(
        Q(name__icontains=query) |
        Q(description__icontains=query) |
        Q(meta_tilte__icontains=query) |
        Q(meta_keyword__icontains=query) |
        Q(meta_description__icontains=query) |
        # Q(category__icontains=query) |
        Q(create_at__icontains=query) |
        # Q(user.username__icontains=query) |
        # Q(published_house__icontains=query) |
        Q(tags__icontains=query) |
        Q(create_at__icontains=query) 
        # available='publised'
        )

    return render(request , "search.html" , {
        'query':query,
        'books':books,
    })

def book_list(request):
    books = Books.objects.filter(available='publised').values_list('name' , flat=True)
    book_list = list(books)[0:100]
    # book_list = list(books)

    return JsonResponse(book_list, safe=False )

