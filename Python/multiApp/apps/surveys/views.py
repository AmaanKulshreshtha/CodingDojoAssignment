"""
Surveys\Views.py handle all request to \blogs
"""

from django.shortcuts import render, HttpResponse, redirect


# the index function is called when root is visited
def index(request):
    response = "placeholder to later display all the surveys created"
    return HttpResponse(response)


def new(request):
    response = "placeholder for users to add a new survey"
    return HttpResponse(response)
