from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User 

from django import forms

class CustomUserCreationForm(UserCreationForm):    
    first_name = forms.CharField(widget=forms.TextInput(attrs={'class': 'form-control my-2', 'placeholder': 'Enter your Username'}))
    last_name = forms.CharField(widget=forms.TextInput(attrs={'class':'form-control my-2', 'placeholder':'Enter your Username'}))
    username = forms.CharField(widget=forms.TextInput(attrs={'class':'form-control my-2', 'placeholder':'Enter your Username'}))
    email = forms.EmailField(widget=forms.TextInput(attrs={'class':'form-control my-2', 'placeholder':'Enter your Email'}))
    password2 = forms.CharField(widget=forms.PasswordInput(attrs={'class':'form-control my-2', 'placeholder':'Enter your Password'}))
    password1 = forms.CharField(widget=forms.PasswordInput(attrs={'class':'form-control my-2', 'placeholder':'Confirm your password'}))
    
    class Meta:
        # db_table = ''
        managed = True
        verbose_name = 'User'
        verbose_name_plural = 'User'
        model = User
        fields = [ 
            'first_name',
            'last_name',
            'email',
            'username',
            'password1',
            'password2',
            ]

