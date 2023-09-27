from django.contrib import admin

from lessons.models import *

admin.site.register(Lessons)
admin.site.register(Categorys)
admin.site.register(Lessons_Comment)

