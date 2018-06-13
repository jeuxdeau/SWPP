# Generated by Django 2.0.4 on 2018-06-13 04:42

import datetime
from django.conf import settings
import django.core.validators
from django.db import migrations, models
import django.db.models.deletion
import enumchoicefield.fields
import multiselectfield.db.fields
import sex
import size


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Companion',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=15)),
                ('sex', enumchoicefield.fields.EnumChoiceField(default=sex.Sex(1), enum_class=sex.Sex, max_length=6)),
                ('birth_year', models.PositiveIntegerField(default=2018)),
                ('breed', models.CharField(choices=[('golden_retriever', '골든리트리버'), ('etc', '기타'), ('dachshund', '닥스훈트'), ('dalmatian', '달마시안'), ('labrador_retriever', '래브라도리트리버'), ('retriever', '리트리버'), ('malamute', '말라뮤트'), ('maltese', '말티즈'), ('miniature_pinscher', '미니핀'), ('mix', '믹스'), ('bulldog', '불독'), ('beagle', '비글'), ('bichon_frise', '비숑프리제'), ('samoyed', '사모예드'), ('sapsal', '삽살개'), ('shar_pei', '샤페이'), ('shepherd', '세퍼트'), ('sheepdog', '쉽독'), ('spitz', '스피츠'), ('siberian_husky', '시베리안허스키'), ('shih_tzu', '시츄'), ('yorkshire_terrier', '요크셔테리어'), ('welsh_corgi', '웰시코기'), ('jindo_dog', '진돗개'), ('chihuahua', '치와와'), ('cocker_spaniel', '코카스파니엘'), ('collie', '콜리'), ('toy_poodle', '토이푸들'), ('papillon', '파피용'), ('pug', '퍼그'), ('pekingese', '페키니즈'), ('pomeranian', '포메라니안'), ('poodle', '푸들'), ('pyrenees', '피레니즈'), ('hound', '하운드')], default='beagle', max_length=100)),
                ('size', enumchoicefield.fields.EnumChoiceField(default=size.Size(1), enum_class=size.Size, max_length=6)),
            ],
        ),
        migrations.CreateModel(
            name='DesiredMate',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('breed', multiselectfield.db.fields.MultiSelectField(choices=[('golden_retriever', '골든리트리버'), ('etc', '기타'), ('dachshund', '닥스훈트'), ('dalmatian', '달마시안'), ('labrador_retriever', '래브라도리트리버'), ('retriever', '리트리버'), ('malamute', '말라뮤트'), ('maltese', '말티즈'), ('miniature_pinscher', '미니핀'), ('mix', '믹스'), ('bulldog', '불독'), ('beagle', '비글'), ('bichon_frise', '비숑프리제'), ('samoyed', '사모예드'), ('sapsal', '삽살개'), ('no_matter', '상관없음'), ('shar_pei', '샤페이'), ('shepherd', '세퍼트'), ('sheepdog', '쉽독'), ('spitz', '스피츠'), ('siberian_husky', '시베리안허스키'), ('shih_tzu', '시츄'), ('yorkshire_terrier', '요크셔테리어'), ('welsh_corgi', '웰시코기'), ('jindo_dog', '진돗개'), ('chihuahua', '치와와'), ('cocker_spaniel', '코카스파니엘'), ('collie', '콜리'), ('toy_poodle', '토이푸들'), ('papillon', '파피용'), ('pug', '퍼그'), ('pekingese', '페키니즈'), ('pomeranian', '포메라니안'), ('poodle', '푸들'), ('pyrenees', '피레니즈'), ('hound', '하운드')], default=['beagle', 'sapsal'], max_length=358)),
                ('sex', enumchoicefield.fields.EnumChoiceField(default=sex.SexDesiredMate(1), enum_class=sex.SexDesiredMate, max_length=9)),
                ('size', enumchoicefield.fields.EnumChoiceField(default=size.SizeDesiredMate(1), enum_class=size.SizeDesiredMate, max_length=9)),
            ],
        ),
        migrations.CreateModel(
            name='File',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('file', models.FileField(upload_to='')),
                ('remark', models.CharField(max_length=20)),
                ('timestamp', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='Like',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('receiver', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='like_received', to='companions.Companion')),
                ('sender', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='like_sent', to='companions.Companion')),
            ],
        ),
        migrations.CreateModel(
            name='MatingSeason',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('season_start', models.DateField()),
                ('season_end', models.DateField()),
            ],
        ),
        migrations.CreateModel(
            name='Message',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('message', models.TextField()),
                ('date_sent', models.DateTimeField(default=datetime.datetime.now)),
                ('is_read', models.BooleanField(default=False)),
                ('receiver', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='message_received', to='companions.Companion')),
                ('sender', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='message_sent', to='companions.Companion')),
            ],
        ),
        migrations.CreateModel(
            name='Personality',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('affinity_with_human', models.IntegerField(default=1, validators=[django.core.validators.MaxValueValidator(5), django.core.validators.MinValueValidator(1)])),
                ('affinity_with_dog', models.IntegerField(default=1, validators=[django.core.validators.MaxValueValidator(5), django.core.validators.MinValueValidator(1)])),
                ('shyness', models.IntegerField(default=1, validators=[django.core.validators.MaxValueValidator(5), django.core.validators.MinValueValidator(1)])),
                ('activity', models.IntegerField(default=1, validators=[django.core.validators.MaxValueValidator(5), django.core.validators.MinValueValidator(1)])),
                ('loudness', models.IntegerField(default=1, validators=[django.core.validators.MaxValueValidator(5), django.core.validators.MinValueValidator(1)])),
                ('aggression', models.IntegerField(default=1, validators=[django.core.validators.MaxValueValidator(5), django.core.validators.MinValueValidator(1)])),
                ('etc', models.TextField(null=True)),
            ],
        ),
        migrations.CreateModel(
            name='PersonalityDesiredMate',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('affinity_with_human', models.IntegerField(default=0, validators=[django.core.validators.MaxValueValidator(5), django.core.validators.MinValueValidator(0)])),
                ('affinity_with_dog', models.IntegerField(default=0, validators=[django.core.validators.MaxValueValidator(5), django.core.validators.MinValueValidator(0)])),
                ('shyness', models.IntegerField(default=0, validators=[django.core.validators.MaxValueValidator(5), django.core.validators.MinValueValidator(0)])),
                ('activity', models.IntegerField(default=0, validators=[django.core.validators.MaxValueValidator(5), django.core.validators.MinValueValidator(0)])),
                ('loudness', models.IntegerField(default=0, validators=[django.core.validators.MaxValueValidator(5), django.core.validators.MinValueValidator(0)])),
                ('aggression', models.IntegerField(default=0, validators=[django.core.validators.MaxValueValidator(5), django.core.validators.MinValueValidator(0)])),
                ('etc', models.TextField(null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Profile',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nickname', models.CharField(max_length=15)),
                ('first_address', models.CharField(max_length=100)),
                ('second_address', models.CharField(max_length=100)),
                ('age', models.PositiveIntegerField(default=0)),
                ('gender', enumchoicefield.fields.EnumChoiceField(default=sex.Sex(1), enum_class=sex.Sex, max_length=6)),
                ('email', models.CharField(max_length=30)),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Proposal',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('granted', models.BooleanField(default=False)),
                ('receiver', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='proposal_received', to='companions.Companion')),
                ('sender', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='proposal_sent', to='companions.Companion')),
            ],
        ),
        migrations.AddField(
            model_name='desiredmate',
            name='personality',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='companions.PersonalityDesiredMate'),
        ),
        migrations.AddField(
            model_name='companion',
            name='desired_mate',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='companions.DesiredMate'),
        ),
        migrations.AddField(
            model_name='companion',
            name='mating_season',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='companions.MatingSeason'),
        ),
        migrations.AddField(
            model_name='companion',
            name='personality',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='companions.Personality'),
        ),
        migrations.AddField(
            model_name='companion',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='companion', to=settings.AUTH_USER_MODEL),
        ),
    ]
