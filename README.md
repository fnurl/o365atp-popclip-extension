# Office 365 Safelink Decoder

PopClip extension that decodes a URL that has been encoded by Office 365 Advance
Threat Prevention and sends the decoded URL to the clipboard.

E-mail recieved to an Office 365 e-mail address with the
SafeLinks service turned on replace all links in the email with a link to
the SafeLinks service which checks the original link to make sure it is safe.

The encoded links look like this 

`https://nam10.safelinks.protection.outlook.com/?url=...`

but longer and with extra stuff.

If you want to copy the link and send it to somebody, being able to decode it
and just send the actual link.


# Requirements

Requires that `node` is installed via Homebrew (or at least available as
`/usr/local/bin/node`).
