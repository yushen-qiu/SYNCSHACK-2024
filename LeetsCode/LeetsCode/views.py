from django.http import HttpResponse

def homepage(request):
    return HttpResponse("Hello, World!")

def test(request):
    return HttpResponse("This is a test page!")