
from django.contrib import admin
from django.urls import path
from lessons import views 
urlpatterns = [
    path('', views.index , name='index' ),
    path('category/<int:parent_id>',views.categories_detail, name='categories_detail'),
    path('incres_the_views_to_categorey/<str:parent_id>',views.incres_the_views_to_categorey, name='incres_the_views_to_categorey'),
    path('add_to_favforet/<int:lesson_id>',views.add_to_favforet, name='add_to_favforet'),
    path('favforet_list', views.favforet_list, name='favforet_list'),
]
