# SI-wedding-site
Little website to manage wedding gifts and golden books.

# Context
Systèmes d'information II, EIA-FR 3th year, fall semester.
Professors: Omar Abou Khaled, Elena Mugellini, Joël Dumoulin, Stefano Carrino.

# Authors 
Lucy Linder
Maria Sisto

----------

*UPDATE 2022 - Backup from NAS*

## How to run

Simply run:
```bash
docker run --rm --name wed -d -p 8080:8080 -p 4848:4848 derlin/wed-live:latest
```

And go to http://localhost:8080/wedding-site

## Preview

### Guest area

![1-home](screenshots/1-home.png)
![2-make-a-gift](screenshots/2-make-a-gift.png)
![2-make-a-gift-custom](screenshots/2-make-a-gift-custom.png)
![3-guestbook](screenshots/3-guestbook.png)

### Manage area

![4-manage](screenshots/4-manage.png)