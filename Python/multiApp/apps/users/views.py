"""
Users\Views.py handle all request to \blogs
"""

from django.shortcuts import render, HttpResponse, redirect


# the register function is called when root is visited
def register(request):
    response = "placeholder for users to create a new user record"
    return HttpResponse(response)


def login(request):
    response = "placeholder for users to login"
    return HttpResponse(response)


def users(request):
    response = "placeholder to later display all the list of users"
    return HttpResponse(response)

