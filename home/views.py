from django.shortcuts import render
from home.models import Contact

# Create your views here.

def index(request):
    if request.method == "POST":
        name = request.POST.get("name")
        email = request.POST.get("email")
        subject = request.POST.get("subject")
        desc = request.POST.get("desc")
        contact = Contact(name=name,email=email,subject=subject,desc=desc)
        contact.save()
    return render(request,"index.html")