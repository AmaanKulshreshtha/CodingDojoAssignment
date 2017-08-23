# -*- coding: utf-8 -*-
from __future__ import unicode_literals
import bcrypt
from django.db import models

class UserManager(models.Manager):
    '''
     post_data is the request.POST from views.register
     which is a dictionary object
    '''
    def validate_registration(self,post_data):

        errors = [] # empty list that be used for storing all error message
        print post_data # debug purpose
    # username must be 3 or more chars
        if len(post_data['username']) < 3:
            errors.append("username must be 3 or more characters!")
    # password must be 8 mor more chars
        if len(post_data['password']) < 8:
            errors.append("password must be 8 or more characters!")
    # password must be the same as confirm password
        if post_data['password'] != post_data['confirm_password']:
            errors.append( "password must be the same as confirm password!")

        return errors


    def create_user(self, clean_data):
        hashed = bcrypt.hashpw(clean_data['password'].encode(), bcrypt.gensalt())
        # go online to study how bcrypt hash a user's password
        return self.create( # self is instance of UserManager which is object
            username = clean_data['username'],
            password = hashed
        )

# Create your models here.
class User(models.Model):
    # django way of define fields (like columns in table)
    username = models.CharField(max_length=255, unique=True)
    password = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    objects = UserManager()


    def __str__(self):
        return self.username

