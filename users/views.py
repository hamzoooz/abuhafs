from django.http import HttpResponse
from django.contrib import auth, messages
from django.contrib.auth import login
from django.contrib.auth.decorators import login_required
# from django.contrib.auth.forms import CustomUserCreationForm
from .forms import CustomUserCreationForm
from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from .models import Profile
# from books.models import Books
# from follow.models import FollowSystem
# from rating.models import RatingSystemUser
# from qoutes.models import  Qoutes

# from cart.cart import Cart

def users(request):
    users = User.objects.all()    
    profiles = Profile.objects.all()
    user = User.objects.all()

    # following = FollowSystem.objects.filter(user=user)
    # following_count = len(following)
    
    # books = Books.objects.filter(user=user)
    # return render(request, 'users/users.html', { 'profiles':profiles , 'following_count':following_count })
    return render(request, 'users/users.html', { 'profiles':profiles })


# def user_detail(request, username ):
#     user = User.objects.get(username=username)
#     profile = Profile.objects.get(user=user)
#     books = Books.objects.filter(user=profile)
#     user_id = request.user.id
#     # ########################################
#     following = FollowSystem.objects.filter(user=user)
#     following_count = len(following)
#     # ########################################
#     followers = FollowSystem.objects.filter(follower=profile)
#     followers_count = len(followers)
#     # ########################################
#     quotes = Qoutes.objects.filter(user=profile.id)
#     # ########################################
#     user_follwer = User.objects.get(username=username)
#     # # ########################################
#     follower = FollowSystem.objects.filter(user=user_id)
#     ids = []
#     for i in follower:
#         ids.append(i.follower.id)
#     # sugist_user = Profile.objects.exclude(user__in=ids).exclude(pk=user_id)
#     sugist_user = Profile.objects.exclude(pk__in=ids).exclude(pk=user_id).exclude(user=user)
#     # ########################################
#     if (FollowSystem.objects.filter(follower=profile.id, user=user_id  )):
#         text = 'UnFollow'
#         color = 'danger'
#     else:
#         text = 'Follow'
#         color = 'primary'
#     # ########################################
#     if request.user.is_authenticated:
#         if (RatingSystemUser.objects.filter(user=request.user, profile=profile)):
#             rating_user = RatingSystemUser.objects.filter(user=request.user, profile=profile).first()
#         else:
#             rating_user = RatingSystemUser.objects.filter(profile=profile).first()
#     else:
#         rating_user = RatingSystemUser.objects.filter(profile=profile)
#     # ########################################

#     return render(request, 'users/user_detail.html', {
#         'user':user,
#         'profile': profile,
#         'books': books,
#         'followers_count': followers_count,
#         'following_count': following_count,
#         'text': text,
#         'color': color,
#         'quotes': quotes,
#         'sugist_user': sugist_user,
#         'rating_user': rating_user,
#     })


def signup(request):
    if request.user.is_authenticated:
        messages.warning(request, 'You Alrady Signup  ')
        return redirect('settings')
    
    if request.method == 'POST':
        form = CustomUserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()

            userprofile = Profile.objects.create(user=user)
            # login(request)
            return redirect('login')
        # return redirect('core/frontpage.html')
    else:
        form = CustomUserCreationForm()
    return render(request, 'users/signup.html', {
        "form":form,
    })


def login(request):
    if request.user.is_authenticated:
        # messages.warning(request, 'You Alrady Loged in   ')
        return redirect('settings')
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = auth.authenticate(username=username, password=password)
        if user is not None:
            auth.login(request, user)
            messages.info(request, f'Wellcome  {user}' )
            return redirect('/')
            # return redirect(request.META.get('HTTP_REFERER'))
        else:
            messages.info(request, 'Credentials Invalid')
            return redirect('login')
        
    else:
        return render(request, 'users/login.html')
 

# @login_required()
# def my_store(request):
#     # cart = Cart(request)
#     user = request.user
#     books = Books.objects.filter(user=user.profile, available='publised')
#     read_later = Books.objects.filter(user=user.profile, available='publised')
#     wiate = Books.objects.filter(user=user.profile, available='wiating')
#     draft = Books.objects.filter(user=user.profile, available='draft')
#     deleted = Books.objects.filter(user=user.profile, available='deleted')
    
#     return render(request, 'users/my_store.html', {
#         "read_later": read_later,
#         'books':books,
#         'deleted':deleted,
#         'wiate':wiate,
#         'draft': draft,
        
#         })

 
@login_required(login_url='login')
def settings(request ):
    return render(request, 'users/settings.html')

