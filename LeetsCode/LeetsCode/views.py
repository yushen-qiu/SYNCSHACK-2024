from django.http import HttpResponse

def homepage(request):
    return HttpResponse("Hello, World!")

def test(request):
    return HttpResponse("This is a test page!")


def chatPage(request):
    context = {}  # Add your context data here
    return render(request, "chat/chatPage.html", context)
