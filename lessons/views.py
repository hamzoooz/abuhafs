from django.shortcuts import render
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


def categories_detail(request, parent_id):
    try:
        # Fetch the category
        category = Categorys.objects.filter(parent=parent_id).annotate(num_lessons=Count('lessons'), total_duration=Sum('lessons__duration')).first()
        if not category:
            raise Categorys.DoesNotExist

        # Increment the number of views for the category
        category.number_of_views += 1
        category.save()

        # Fetch child category
        child = Categorys.objects.get(pk=parent_id)

        # Fetch parent category
        parent = Categorys.objects.filter(pk=category.parent_id).first()

        # Fetch lessons for the category
        lessons = Lessons.objects.filter(category=parent_id)

        # Process each lesson
        for lesson in lessons:
            # Increment the number of views for the lesson
            lesson.number_of_views += 1
            lesson.save()

            # Get the file path
            file = lesson.file.path

            # Check if the file exists
            if os.path.exists(file):
                # Get the file extension
                file_extension = os.path.splitext(file)[1]
                lesson.type_of_file = file_extension

                # Get the file size
                file_size = os.path.getsize(file)
                lesson.size = file_size

                # Set the URL
                lesson.url = lesson.file.url

                # Open the audio file and calculate duration
                audio = AudioSegment.from_file(file)
                lesson.duration = audio.duration_seconds

                # Save the lesson
                lesson.save()
            else:
                # Handle the case where the file does not exist
                print(f"File not found: {file}")

        return render(request, 'categories_detail.html', {
            "category": category,
            "lessons": lessons, 
            "child": child, 
            "parent": parent, 
        })
    except Categorys.DoesNotExist:
        # Handle the case where the category does not exist
        return HttpResponse("Category not found", status=404)


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



# def categories_detail(request, parent_id):
#     category = Categorys.objects.get(id=parent_id)
#     if category.get_descendants():
#         # If the category has child categories, get the last child category
#         last_child = category.get_descendants(include_self=True).last()
#         lessons = Lessons.objects.filter(category=last_child)
#     else:
#         # If the category doesn't have child categories, get its lessons
#         lessons = Lessons.objects.filter(category=category)

#     # context = {
#     #     'category': category,
#     #     'lessons': lessons,
#     # }
#     return render(request, 'categories_detail.html', {
#         "category": category,
#         "lessons": lessons,})