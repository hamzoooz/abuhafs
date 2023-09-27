from django.contrib.auth import views as auth_views
from django.urls import path
from . import views

urlpatterns = [
    path('signup/', views.signup, name='signup'),
    path('logout/', auth_views.LogoutView.as_view(), name='logout'),
    path('login/', views.login, name='login'),
    path('users/', views.users, name='users'),
    # path('users/<str:username>/', views.user_detail, name='user'),
    path('users/settings', views.settings, name='settings'),
    # path('my_library/', views.my_store, name='my_store'),
    # path('login/', auth_views.LoginView.as_view(template_name='users/login.html'), name='login'),
]