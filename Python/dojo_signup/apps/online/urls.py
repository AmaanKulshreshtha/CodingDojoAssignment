"""online URL Configuration
This should handle requests received

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url, include
from .import views   # from the current directory import views.py

urlpatterns = [
    url(r'^$',views.index),    # any route is  r'^',  r'^$' is route ('/'), the function that handle / is in views called index
    url(r'^programinfo$',views.programinfo), # route for '/programinfo' , sent it to function programinfo under views
    url(r'^process',views.process)  # route for '/process', sent request to function process
]
