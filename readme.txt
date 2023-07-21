Add me on Discord if you need help with the alert: Buurazu#8042


By the way, with the custom text box redemption feature, you can specify a character to use by starting the message with their name and a colon (like "Banjo: Guh-huh!")
Also, moderators can do custom text boxes at will with "!say" in chat!


BASIC STEPS TO RUN THE ALERT:

============
1. Add a Browser to your scene
============
Make a new Browser Source, and point it to the .html file. The display size is 640x96, although bigger doesn't cause any harm, just empty space. The default Custom CSS is perfect.

============
2. Authorize the alert to your Twitch account
============
The first time the alert loads in OBS, it will copy an authorization URL to your clipboard. (That URL is the same as the "Twitch Token Generator" shortcut in the files here)
You've likely seen the resulting page before if you've connected your Twitch account to things.

Once you approve that on a normal browser, you'll need to copy the token it gives you, and add it after the Browser Source's URL, plus a hash, like "BanjoFollowAlert.html#abcdefghijklmnop2dkzjsltjv"
Example: https://i.imgur.com/EpusTAa.png
(if "Local file" is checked, you can't add to the URL, so you'll need to use the file location itself as a URL)

I'm not sure how often this token will need to be replaced; I'm hoping it's every 2 months, which isn't too bad.

The alert should now be watching for new follows, subscribers, bit donations, and redemptions of a channel point reward named "Textbox on Stream"!


OPTIONAL THINGS TO DO:

============
3. Open SettingsEditor.exe
============
The settings available to edit are:
Changing the name of the channel reward it looks for
Adding an outline to the text box (great on black backgrounds!)
Allowing refollows (otherwise, all pre-existing follows are added to a do-not-notify list)
Playing fanfare on new follows
Adjusting the volume (OBS can probably do this too)
Disabling characters

If it won't launch, try downloading: http://www.microsoft.com/en-us/download/details.aspx?id=17851

If you still can't get it to work, you can try editing settings.js yourself; what you need to change and where should be pretty obvious. Or, feel free to message me with what settings you'd like, and I can make a settings.js for you and send it.

============
4. Change fanfare.wav
============
This wav file plays for follows, subscriptions, and bits. It can be any sound, any length. Personally I like the one that comes with it the most.

============
5. Change the character's messages
============
It's not the easiest thing to edit, but all the dialogue is stored in characterMessages.js. I tried to be funny but also nice (to the donator at least!) but I'm sure you can do better!

The source code of the alert itself is right there too of course, it's just an HTML file. So if you feel comfortable, go for it.


Known Issues:
I can't seem to get the username from a subscription alert, only the display name. So, Japanese display names are just empty space. (Makes me kind of want to get the Japanese B-K font in here...)


Changelog:
V2.3 - 4/22/2022
Added Snacker, Gobi, Tiptup, and Napper

V2.2 - 10/15/2021
Change the OAuth-obtaining method entirely because of course it stopped working

V2.1.1 - 4/10/2021
Actually added the files for Bottles/Conga/Orange, added Loggo, Jamjars, Jolly, and Blackeye

V2.1 - 4/9/2021
Added gift sub support, overhauled the settings editor to make it easier to add new characters, added Bottles, Conga, and Orange

V2.0 - 4/2/2021
Added bit/sub/channel point support, OAuth is now handled way better so it doesn't expire, and is initiated by the user (so it can read channel point events and isn't tied to my account), settings have default values, character text is easier to edit, woo

V1.6 I guess - 6/1/2020
Twitch probably updated their API like 10 times in these 4 years, anyway, it's fixed again probably, and now OBS browser sources are way easier to add

V1.5 - 12/8/2016
Twitch updated their API in a way that broke the alert, so now alert is not broke ok yes ok

V1.4.1 - 5/20/2015
Fixed a weird audio issue accidentally caused by Isotarge's improving of the code (whoops)

V1.4 - 5/15/2015
Isotarge improved the code

V1.3 - 5/12/2015
It's on Google Drive now
General improvements
Added Mr. Vile and Humba

V1.2 - 1/20/2015
Added Mingella and Blobbelda, mostly for garagedooropener

V1.1 - 1/12/2015
Added Mr. Patch and Boggy. WAHÆY!
Changed the drawing function to run 33.333 times a second instead of 100. Should lower CPU usage, without lowering quality!

V1.0 - 1/10/2015
First release!