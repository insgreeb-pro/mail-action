# Mail Action

Sending Email via github action using gmail service.

# Usage

```yml
- uses: insgreeb-pro/mail-action@v1
  name: Email Notification
  with:
    email: ${{ secrets.EMAIL_USER }}
    password: ${{ secrets.EMAIL_PASSWORD }}
    to: ${{ secrets.TO }}
    subject: Email Notification ${{ github.repository }}
    html: |
      <p>Actor: ${{ github.actor }}</p>
      <p>Message: ${{ github.event.head_commit.message }}</p>
```

**email** - (_required_) gmail email account\
**password** - (_required_) password to login gmail\
**to** - (_required_) email destination, using comma separation if multiple destination ex: `example@example.com` or `user1@example.com, user2@domain.com`\
**subject** (_required_) email subject\
**text** (_optional_) email body text\
**html** (_optional_) email body using html

---

**Note**:

> Don't forget to activate less secure app on gmail settings.
