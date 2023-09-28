from django.db import models
from django.contrib.auth.models import User
from django.db.models import Sum, Count


    
class Categorys(models.Model):
    name = models.CharField(max_length=150, null=False , blank=False)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    image = models.FileField(upload_to='category_image', default='default_thumbnail.png')
    create_at = models.DateTimeField(auto_now_add=True)
    update_at =  models.DateTimeField(auto_now_add=True)
    number_of_views = models.IntegerField(default=0)
    # text_of_lesson = models.TextField(max_length=20000)
    parent = models.ForeignKey('self', null=True, blank=True, related_name='children', on_delete=models.CASCADE)
    description = models.TextField(max_length=2000)
    # number_of_lessons = models.ForeignKey(Lessons, on_delete=models.CASCADE)
    
    # ... other fields ...
    @property
    def lessons_count(self):
        # Get the count of lessons within the category
        count = Lessons.objects.filter(category=self).count()
        return count

    @property
    def total_duration(self):
        # Get all the lessons (music files) within the category
        lessons = Lessons.objects.filter(category=self)

        # Calculate the total duration using Django's aggregation Sum function
        total_duration = lessons.aggregate(Sum('duration'))['duration__sum']

        # Return the total duration (or 0 if there are no lessons)
        return total_duration or 0

    @total_duration.setter
    def total_duration(self, value):
        # This setter method allows you to set the total_duration property
        # It's up to you how you want to handle setting the value, as it's not clear from your question
        pass 
    # ... other methods and fields ...
        
    def __str__(self):
        return f'{self.name}'

class Lessons(models.Model):
    name = models.CharField(max_length=150, null=False , blank=False)
    file = models.FileField(upload_to='upload/lessons')
    url = models.URLField(blank=True, null=True)
    category = models.ManyToManyField(Categorys)
    user = models.ForeignKey(User, on_delete=models.CASCADE, default=1)
    description = models.TextField(max_length=2000, null=True, blank=True )
    tags = models.CharField( max_length=50, null=True, blank=True)
    number_of_views = models.IntegerField(default=0)
    create_at = models.DateTimeField(auto_now_add=True)
    update_at =  models.DateTimeField(auto_now_add=True)
    type_of_file = models.CharField(max_length=10, default='MP3')
    size  = models.IntegerField(default=0, blank=True, null=True)
    duration = models.IntegerField(default=0)
    # duration duration
    
    def __str__(self):
        return f'{self.name}'
    
    
class Lessons_Comment(models.Model):
    text = models.CharField(max_length=150, null=False, blank=False)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    lesson = models.ForeignKey(Lessons, on_delete=models.CASCADE)
    create_at = models.DateTimeField(auto_now_add=True)
    update_at = models.DateTimeField(auto_now_add=True)
    number_of_views = models.IntegerField(default=0)
    number_of_liks = models.IntegerField(default=0)
    
    def __str__(self):
        return f'{self.user} - {self.text}'
    
    
class Favforet_list(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE )
    lesson = models.ForeignKey(Lessons, on_delete=models.CASCADE)
    create_at = models.DateTimeField(auto_now_add=True)
    update_at = models.DateTimeField(auto_now=True)
    def __str__(self):
        return f'{self.user} - {self.lesson}'
    
    