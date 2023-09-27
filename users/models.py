import os
from datetime import datetime
from django.db import models
from ckeditor.fields import RichTextField
from django.contrib.auth.models import User

def get_file_path_profile(request, filename):
    orifinal_filename = filename
    name = 'bookhope.com'
    nowtime = datetime.now().strftime('%Y %d %h %M:%S')
    filename = '%s %s.png' % (orifinal_filename, name)
    return os.path.join('upload/users/profiles/', filename)

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    phone = models.CharField(max_length=150, blank=True, null=True)
    profile_image = models.ImageField( upload_to=get_file_path_profile, default='cover-book-quran.jpg', null=True, blank=True)
    descrption = RichTextField(blank=True, null=True)
    profile_cover_image = models.ImageField( upload_to=get_file_path_profile, default='cover-book-quran.jpg', null=True, blank=True)
    rating = models.IntegerField(default=0, blank=True, null=True)
    address = models.TextField(blank=True, null=True)
    city = models.CharField(max_length=150, blank=True, null=True)
    stats = models.CharField(max_length=150, blank=True, null=True)
    ordered = models.IntegerField(blank=True, null=True)
    conutry = models.CharField(max_length=150, blank=True, null=True)
    pincode = models.CharField(max_length=150, blank=True, null=True)
    create_at = models.DateTimeField(auto_now_add=True)
    update_at = models.DateTimeField(auto_now=True)
    number_of_books = models.IntegerField(default=0, blank=True, null=True)
    number_of_downloaded = models.IntegerField( default=0, blank=True, null=True)
    web_site = models.URLField(blank=True, null=True)
    contat_facebook = models.URLField(blank=True, null=True)
    contat_twitter = models.URLField(blank=True, null=True)
    number_of_gifft = models.IntegerField(default=0)
    aprov = models.BooleanField(default=False)
    pro = models.BooleanField(default=False)


    def __str__(self):
        return self.user.username
    
    def get_full_name(self):
        return f'{self.user.first_name} {self.user.last_name}'