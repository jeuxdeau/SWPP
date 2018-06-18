from django.conf.urls import url
from companions import views
from rest_framework.urlpatterns import format_suffix_patterns
from .views import FileView

urlpatterns = [
    url(r'^api/companions/$', views.CompanionList.as_view()),
    url(r'^api/companions/(?P<pk>[0-9]+)/$', views.CompanionDetail.as_view()),
    url(r'^api/companions/desired_mate$', views.DesiredMateList.as_view()),
    url(r'^api/companions/personality$', views.PersonalityList.as_view()),
    url(r'^api/companions/personality_desired_mate$', views.PersonalityDesiredMateList.as_view()),
    url(r'^api/companions/mating_season$', views.MatingSeasonList.as_view()),
    url(r'^api/likes/$', views.LikeList.as_view()),
    url(r'^api/proposals/$', views.ProposalList.as_view()),
    url(r'^api/messages/$', views.MessageList.as_view()),
    url(r'^api/likes/(?P<pk>[0-9]+)/$', views.LikeDetail.as_view()),
    url(r'^api/proposals/(?P<pk>[0-9]+)/$', views.ProposalDetail.as_view()),
    url(r'^api/messages/(?P<pk>[0-9]+)/$', views.MessageDetail.as_view()),
    url(r'^api/files/$', views.FileList.as_view()),
    url(r'^api/users/$', views.UserListAndSignUp.as_view()),
    url(r'^api/users/(?P<pk>[0-9]+)/$', views.UserDetail.as_view()),
    url(r'^api/total/(?P<pk>[0-9]+)/$', views.UserTotalInfoDetail.as_view()),
    url(r'^api/users/update/password/(?P<pk>[0-9]+)/$', views.UserPasswordUpdateDetail.as_view()),
    url(r'^api/users/update/profile/(?P<pk>[0-9]+)/$', views.UserProfileUpdateDetail.as_view()),
    url(r'^api/users/update/represent/(?P<pk>[0-9]+)/$', views.RepresentCompanionUpdateDetail.as_view()),
    url(r'^api/users/represent/$', views.RepresentCompanionList.as_view()),
    url(r'^api/profiles/$', views.ProfileList.as_view()),
    url(r'^api/companions/address/$', views.CompanionAddressList.as_view()),
    url(r'^api/profiles/(?P<pk>[0-9]+)/$', views.ProfileDetail.as_view()),
    url(r'^api/upload/$', FileView.as_view(), name='file-upload'),
]

urlpatterns = format_suffix_patterns(urlpatterns)
