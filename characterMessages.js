/*

The lines here are fully editable, although if you mess up the syntax
(like the commas and brackets around the lines) it'll probably break everything.

$N = name of the follower/etc.
$U = your username
$B = # BIT(S)
$G = # SUB(S) (for gifts)
$S = context S (for custom names for bits/subs)
$# = just number of bits (for calling them things other than bits)

*/


var NEWFOLLOW = 0; var NEWSUBSCRIPTION = 1; var NEWDONATION = 2; var NEWCHANNELPOINTS = 3; var NEWGIFTS = 4;

//constants so that characters with a BK and BT version can be merged for certain things
var GRUNTILDA = 0, SEXYGRUNTILDA = 1, MUMBO = 2, SAUCER = 3, KLUNGO = 4, BANJO = 5,
KAZOOIE = 6, HUMBA = 7, CONGA = 8, VILE = 9, BOGGY = 10, LOGGO = 11, BOTTLES = 12,
JAMJARS = 13, BLACKEYE = 14, JOLLY = 15, PATCH = 16, MINGELLA = 17, BLOBBELDA = 18,
ORANGE = 19, SNACKER = 20, GOBI = 21, TIPTUP = 22, NAPPER = 23;

//for choosing characters in channel point redemptions
var charNames = [ ["Grunty","Gruntilda"], ["Sexy Grunty","Sexy Gruntilda"], ["Mumbo", "Mumbo Jumbo"],
["Saucer", "Saucer of Peril"], ["Klungo"], ["Banjo"], ["Kazooie"], ["Humba", "Humba Wumba"], ["Conga"], ["Vile", "Mr. Vile"],
["Boggy"], ["Loggo"], ["Bottles"], ["Jamjars"], ["Blackeye", "Captain Blackeye"],
["Jolly", "Jolly Roger"], ["Patch", "Mr. Patch"], ["Mingella", "Mingy"], ["Blobbelda", "Blobby"], ["Orange"],
["Snacker"], ["Gobi"], ["Tiptup"], ["Napper"] ];

var charMessages = [];
charMessages[GRUNTILDA] = [];
charMessages[GRUNTILDA][NEWFOLLOW] = [
	"THE RUNS ARE BAD, THEY ALWAYS DIE, YET $N FOLLOWS THIS GUY!",
	"$N IS REALLY RAD, 'CAUSE THEY JUST FOLLOWED THIS DUMB CAD!",
	"$N CAN WATCH THE BEAR AS HE DIES TO THE BADDIES OF MY LAIR!",
	"$N CAN WATCH EVERY DAY, I'LL ALWAYS BLOW THIS BEAR AWAY!",
	"$N MUST LIKE THE COLOR RED, TO HAVE FOLLOWED THIS AIRHEAD!",
	"$N, ENJOY THE RUN, THOUGH THIS GUY CAN NEVER FINISH ONE!" ];
	
charMessages[GRUNTILDA][NEWSUBSCRIPTION] = [
	"THE RUNS ARE BAD, THEY ALWAYS DIE, YET $N SUBSCRIBED TO THIS GUY!",
	"$N IS REALLY RAD, 'CAUSE THEY JUST SUBSCRIBED TO THIS DUMB CAD!",
	"$N MUST LIKE THE COLOR RED, TO HAVE SUBSCRIBED TO THIS AIRHEAD!" ];
	
charMessages[GRUNTILDA][NEWDONATION] = [
	"THE RUNS ARE BAD, THEY ALWAYS DIE, YET $N GAVE $B TO THIS GUY!",
	"$N IS REALLY RAD, 'CAUSE THEY GAVE $B TO THIS DUMB CAD!",
	"$N, THANKS FOR THE $B, NOW ENJOY THOSE BRIGHT RED SPLITS!" ];
	
	charMessages[GRUNTILDA][NEWGIFTS] = [
	"THE RUNS ARE BAD, THEY ALWAYS DIE, YET $N GIFTED $G TO THIS GUY!",
	"$N IS REALLY RAD, 'CAUSE THEY GIFTED $G TO THIS DUMB CAD!",
	"$N, THANKS FOR GIFTING $G, NOW ENJOY THIS GUY'S FLUBS!" ];
	
charMessages[SEXYGRUNTILDA] = [];
charMessages[SEXYGRUNTILDA][NEWFOLLOW] = [
	"$N IS REALLY GREAT, I'D LOVE TO TAKE THEM ON A DATE!",
	"$N IS SO FINE, A LAY WITH THEM I'D NOT DECLINE!",
	"$N, THANKS A LOT, I THINK YOU ARE SUPER HOT!" ];
	
charMessages[SEXYGRUNTILDA][NEWSUBSCRIPTION] = [
	"THANKS FOR SUBBING $N, NOW PLEASE, WATCH MY SCARY STRIPTEASE!" ];
	
charMessages[SEXYGRUNTILDA][NEWDONATION] = [
	"$N, THANKS FOR THE $B! THAT'S ALMOST ENOUGH TO SEE MY T-" ];
	
charMessages[SEXYGRUNTILDA][NEWGIFTS] = [
	"$N, THANKS FOR GIFTING $G! CARE TO JOIN ME IN THE TUB?" ];
	
charMessages[MUMBO] = [];
charMessages[MUMBO][NEWFOLLOW] = [
	"MUMBO GIVE THANKS TO $N FOR FOLLOW!" ];
	
charMessages[MUMBO][NEWSUBSCRIPTION] = [
	"MUMBO GIVE THANKS TO $N FOR SUB!" ];
	
charMessages[MUMBO][NEWDONATION] = [
	"MUMBO GIVE THANKS TO $N FOR $B!" ];
	
	charMessages[MUMBO][NEWGIFTS] = [
	"MUMBO GIVE THANKS TO $N FOR $G!" ];
	
charMessages[SAUCER] = [];
charMessages[SAUCER][NEWFOLLOW] = [
	"BLEEP! THANKZ FOR THE FOLLOW, $N! BLEEP!" ];
	
charMessages[SAUCER][NEWSUBSCRIPTION] = [
	"BLEEP! THANKZ FOR THE ZUB, $N! BLEEP!" ];
	
charMessages[SAUCER][NEWDONATION] = [
	"BLEEP! $N SET A NEW HIGH SCORE OF $B! BLEEP!" ];
	
charMessages[SAUCER][NEWGIFTS] = [
	"BLEEP! $N SET A NEW HIGH SCORE OF $# GIFT$S! BLEEP!" ];
	
charMessages[KLUNGO] = [];
charMessages[KLUNGO][NEWFOLLOW] = [
	"THANKSSS FOR TEH FOLLOW, $N!",
	"SSSORRY FOR ALL TEH BLUE POTIONSSS, $N..." ];
	
charMessages[KLUNGO][NEWSUBSCRIPTION] = [
	"THANKSSS FOR TEH SSSUB, $N!" ];
	
charMessages[KLUNGO][NEWDONATION] = [
	"THANKSSS FOR TEH $B, $N!" ];
	
charMessages[KLUNGO][NEWGIFTS] = [
	"THANKSSS FOR TEH $G, $N!" ];

//Banjo is bland to try to write dialogue for tbh
charMessages[BANJO] = [];
charMessages[BANJO][NEWFOLLOW] = [
	"THANKS SO MUCH FOR FOLLOWING, $N." ];
	
charMessages[BANJO][NEWSUBSCRIPTION] = [
	"GUH-HUH! THANKS FOR SUBSCRIBING, $N!" ];
	
charMessages[BANJO][NEWDONATION] = [
	"THANK YOU FOR THE $B, $N!" ];
	
	charMessages[BANJO][NEWGIFTS] = [
	"THANK YOU FOR GIFTING $G, $N!" ];

//Kazooie has sarcasm potential but I don't want to be too rude in the alert
charMessages[KAZOOIE] = [];
charMessages[KAZOOIE][NEWFOLLOW] = [
	"GREAT, $N CAN WATCH ME LUG THIS FURBALL AROUND FOR TWO HOURS..." ];
	
charMessages[KAZOOIE][NEWSUBSCRIPTION] = [
	"THANKS FOR SUBSCRIBING, $N! THIS PAYS WAY BETTER THAN ADVENTURING!" ];
	
charMessages[KAZOOIE][NEWDONATION] = [
	"$B? THANKS $N! THIS PAYS WAY BETTER THAN ADVENTURING!" ];
	
	charMessages[KAZOOIE][NEWGIFTS] = [
	"THANKS FOR GIFTING $G, $N! THIS PAYS WAY BETTER THAN ADVENTURING!" ];

//why did I add patch, patch sux
charMessages[PATCH] = [];
charMessages[PATCH][NEWFOLLOW] = [
	"OH DEAR, I HOPE $N WON'T BE MAD IF I RUIN THE RUN..." ];
	
charMessages[PATCH][NEWSUBSCRIPTION] = [
	"YOU'LL NEED MORE THAN A SUBSCRIPTION TO ENTER MY BIG TOP, $N!" ];
	
charMessages[PATCH][NEWDONATION] = [
	"$B? YOU'LL NEED MORE THAN THAT TO ENTER MY BIG TOP, $N!",
	"HEY, WATCH WHERE YOU THROW THOSE POINTY BITS, $N!" ];
	
	charMessages[PATCH][NEWGIFTS] = [
	"THANKS FOR GIVING AWAY $# TICKET$S TO MY BIG TOP, $N!" ];

//all i can think of for humba is big heap
charMessages[HUMBA] = [];
charMessages[HUMBA][NEWFOLLOW] = [
	"BIG HEAP THANKS FOR FOLLOWING TO $N!" ];
	
charMessages[HUMBA][NEWSUBSCRIPTION] = [
	"BIG HEAP THANKS FOR SUBSCRIBING TO $N!" ];
	
charMessages[HUMBA][NEWDONATION] = [
	"BIG HEAP THANKS FOR $B TO $N!" ];
	
	charMessages[HUMBA][NEWGIFTS] = [
	"BIG HEAP THANKS FOR $# GIFT$S TO $N!" ];
	
//NOTE: currently, Boggy is hard-coded to start with a "WAHEY!"
charMessages[BOGGY] = [];
charMessages[BOGGY][NEWFOLLOW] = [
	"WAHEY!\nTHANKS FOR THE FOLLOW, $N!",
	"WAHAY!\nTHANKS FOR THE FOLLOW, $N!" ];
	
charMessages[BOGGY][NEWSUBSCRIPTION] = [
	"WAHEY!\nTHANKS FOR THE SUB, $N!",
	"WAHAY!\nTHANKS FOR THE SUB, $N!" ];
	
charMessages[BOGGY][NEWDONATION] = [
	"WAHEY!\nTHANKS FOR THE $B, $N!",
	"WAHAY!\nTHANKS FOR THE $B, $N!" ];
	
	charMessages[BOGGY][NEWGIFTS] = [
	"WAHEY!\nTHANKS FOR GIFTING $G, $N!",
	"WAHAY!\nTHANKS FOR GIFTING $G, $N!" ];
	
//when was the last time anyone's actually read mingy or blobby's dialogue
charMessages[MINGELLA] = [];
charMessages[MINGELLA][NEWFOLLOW] = [
	"DEFEAT US $U CAN NOT, YET FOLLOWED THEM $N HAS!" ];
	
charMessages[MINGELLA][NEWSUBSCRIPTION] = [
	"SUBSCRIBED $N HAS, THEIR LIFE FORCE WE WILL LEAVE!" ];
	
charMessages[MINGELLA][NEWDONATION] = [
	"DONATED $B $N HAS, THEIR LIFE FORCE WE WILL LEAVE!" ];
	
charMessages[MINGELLA][NEWGIFTS] = [
	"GIFTED $S $N HAS, THEIR LIFE FORCE WE WILL LEAVE!" ];
	
charMessages[BLOBBELDA] = [];
charMessages[BLOBBELDA][NEWFOLLOW] = [
	"DEFEAT US $U CAN NOT, YET FOLLOWED THEM $N HAS!" ];
	
charMessages[BLOBBELDA][NEWSUBSCRIPTION] = [
	"SUBSCRIBED $N HAS, THEIR LIFE FORCE WE WILL SPARE!" ];
	
charMessages[BLOBBELDA][NEWDONATION] = [
	"DONATED $B $N HAS, THEIR LIFE FORCE WE WILL SPARE!" ];
	
charMessages[BLOBBELDA][NEWGIFTS] = [
	"GIFTED $S $N HAS, THEIR LIFE FORCE WE WILL SPARE!" ];
	
charMessages[VILE] = [];
charMessages[VILE][NEWFOLLOW] = [
	"HURR! $N SHOULD FOLLOW MR. VILE INSTEAD, GREENY'S TOO SLOW!",
	"HUR...HUR...HUR! $N IS THE GREATEST FOLLOWER OF ALL!" ];
	
charMessages[VILE][NEWSUBSCRIPTION] = [
	"HURR! $N SHOULD SUB TO MR. VILE INSTEAD, GREENY'S TOO SLOW!" ];
	
charMessages[VILE][NEWDONATION] = [
	"HURR! GREENY SHOULD TAKE THOSE $B AND RUN!" ];
	
	charMessages[VILE][NEWGIFTS] = [
	"HURR! GREENY GAVE $G TO WATCH HIM LOSE!" ];
	
charMessages[CONGA] = [];
charMessages[CONGA][NEWFOLLOW] = [
	"GRRAAR... YOU CAN LOOK BUT DON'T TOUCH CONGA'S ORANGE, $N!" ];
	
charMessages[CONGA][NEWSUBSCRIPTION] = [
	"HEY! GIVE THAT SUB TO CONGA INSTEAD, $N!" ];
	
charMessages[CONGA][NEWDONATION] = [
	"ME THANK $N FOR $# ORANGE$S!" ];
	
	charMessages[CONGA][NEWGIFTS] = [
	"ME THANK $N FOR $# GIFT$S!" ];

//bottles canonically spells it WAHAY
charMessages[BOTTLES] = [];
charMessages[BOTTLES][NEWFOLLOW] = [
	"WAHAY! THANK YOU FOR FOLLOWING, $N!" ];
	
//fuck it
//no one will ever see this
charMessages[BOTTLES][NEWSUBSCRIPTION] = [
	"WAHAY! THANK YOU FOR SUBSCRIBING, $N!",
	"WAHAY! THANK YOU FOR SUBSCRIBING, $N!",
	"WAHAY! THANK YOU FOR SUBSCRIBING, $N!",
	"WAHAY! THANK YOU FOR SUBSCRIBING, $N!",
	"HEY $N, NICE COCK!" ];
	
charMessages[BOTTLES][NEWDONATION] = [
	"THANKS FOR THE $B, $N! I'M STILL IN DEBT FROM THAT CARD GAME..." ];
	
	charMessages[BOTTLES][NEWGIFTS] = [
	"WOW! $N'S BEST GIFT SCORE IS NOW $#!" ];
	
charMessages[ORANGE] = [];
charMessages[ORANGE][NEWFOLLOW] = [
	"ORANGE YOU GLAD TO FOLLOW, $N?" ];
	
charMessages[ORANGE][NEWSUBSCRIPTION] = [
	"YUM... SUBSCRIPTIONS ARE NICE! THANKS, $N!" ];
	
charMessages[ORANGE][NEWDONATION] = [
	"YUM... $B ARE NICE! THANKS, $N!" ];
	
	charMessages[ORANGE][NEWGIFTS] = [
	"YUM... $# GIFT$S ARE NICE! THANKS, $N!" ];
	
charMessages[JOLLY] = [];
charMessages[JOLLY][NEWFOLLOW] = [
	"OH, HELLO THERE $N! WELCOME TO OUR LOVELY CHANNEL!" ];
	
charMessages[JOLLY][NEWSUBSCRIPTION] = [
	"THANK YOU FOR THE SUB, $N! THAT'S ENOUGH FOR A SEAMAN'S SURPRISE!" ];
	
charMessages[JOLLY][NEWDONATION] = [
	"$# MORE DOUBLOONS TOWARDS THE DOOR REPAIR... THANKS $N!" ];
	
	charMessages[JOLLY][NEWGIFTS] = [
	"THANKS FOR BRINGING IN $# MORE CUSTOMER$S, $N! CHEERS!" ];
	
charMessages[JAMJARS] = [];
charMessages[JAMJARS][NEWFOLLOW] = [
	"WELCOME TO THE SQUAD, PRIVATE $N!" ];
	
charMessages[JAMJARS][NEWSUBSCRIPTION] = [
	"THANK YOU $N FOR THE SUB, WELCOME TO OUR LITTLE CLUB!" ];
	
charMessages[JAMJARS][NEWDONATION] = [
	"YOU'LL NEED MORE THAN $# NOTES TO LEARN THIS MOVE, $N!" ];
	
charMessages[JAMJARS][NEWGIFTS] = [
	"THANK YOU $N FOR $G, WELCOME TO OUR LITTLE CLUB!" ];
	
charMessages[BLACKEYE] = [];
charMessages[BLACKEYE][NEWFOLLOW] = [
	"AHOY, $N! IT BE A DREAM COME TRUE TA SEE YA HERE!" ];
	
charMessages[BLACKEYE][NEWSUBSCRIPTION] = [
	"AVAST THERE, $N! YER A FINE ADDITION TA MY CREW!" ];
	
charMessages[BLACKEYE][NEWDONATION] = [
	"I'LL BE TAKIN' THOSE $# DOUBLOONS THAR, $N!" ];
	
	charMessages[BLACKEYE][NEWGIFTS] = [
	"ARRR, YE BROUGHT $# MORE MATEY$S FOR MY CREW, $N!" ];
	
charMessages[LOGGO] = [];
charMessages[LOGGO][NEWFOLLOW] = [
	"GURGLE... $N IS MUCH TOO FAT TO FIT IN LOGGO'S MOUTH!" ];
	
charMessages[LOGGO][NEWSUBSCRIPTION] = [
	"OH, THANK YOU $N! I'M SO HAPPY I COULD FLOOD!" ];
	
charMessages[LOGGO][NEWDONATION] = [
	"I THINK THOSE $B WERE CLOGGING MY U-BEND! YOU CAN KEEP 'EM, $N..." ];
	
	charMessages[LOGGO][NEWGIFTS] = [
	"$N GIFTED $G? I HOPE ONE OF YOU IS A PLUMBER..." ];
	
	charMessages[SNACKER] = [];
charMessages[SNACKER][NEWFOLLOW] = [
	"$N FOLLOWED? I'LL BE RIGHT OVER!",
	"AHH... CHEESE AND $N - JUST WAIT THERE!" ];
	
charMessages[SNACKER][NEWSUBSCRIPTION] = [
	"SNACKER SMELLS TASTY SUB, STAY JUST THERE, $N!" ];
	
charMessages[SNACKER][NEWDONATION] = [
	"YIPPEE! SNACKER GETS TASTY $B TOO, THANKS $N!" ];
	
	charMessages[SNACKER][NEWGIFTS] = [
	"MMMM, $# MORE MINT$S, THANKS $N!" ];
	
	charMessages[GOBI] = [];
charMessages[GOBI][NEWFOLLOW] = [
	"OH NO, IT'S $N AGAIN, GOBI THOUGHT HE WAS SAFE HERE...",
	"THANK YOU FOR THE FOLLOW $N, NOW PLEASE HELP ME!" ];
	
charMessages[GOBI][NEWSUBSCRIPTION] = [
	"OH, A NEW SUB! CAN YOU FIND ME SOME WATER, $N?" ];
	
charMessages[GOBI][NEWDONATION] = [
	"OI! MY PRECIOUS $B! GIVE THEM BACK, $N!" ];
	
	charMessages[GOBI][NEWGIFTS] = [
	"I DON'T HAVE ENOUGH WATER FOR $G, $N!" ];
	
	charMessages[TIPTUP] = [];
charMessages[TIPTUP][NEWFOLLOW] = [
	"QUIET, $N. THE FAMOUS $U IS PERFORMING HIS LATEST RUN.",
	"DO YOU THINK YOU CAN MATCH THIS RUNNER'S PACE, $N?" ];
	
charMessages[TIPTUP][NEWSUBSCRIPTION] = [
	"MAGNIFICENT! THANK YOU FOR SUBSCRIBING, $N!" ];
	
charMessages[TIPTUP][NEWDONATION] = [
	"THE TIPTUP CHOIR APPRECIATES YOUR $B CONTRIBUTION, $N!" ];
	
	charMessages[TIPTUP][NEWGIFTS] = [
	"THE TIPTUP CHOIR APPRECIATES YOUR $G CONTRIBUTION, $N!" ];
	
	charMessages[NAPPER] = [];
charMessages[NAPPER][NEWFOLLOW] = [
	"ZZZ... I'M BUSY SLEEPING... BUT I THINK I HEARD $N CREEPING..." ];
	
charMessages[NAPPER][NEWSUBSCRIPTION] = [
	"$N IS RATHER WISE, FOR THAT SUB EARNS THEM MY GOLDEN PRIZE!" ];
	
charMessages[NAPPER][NEWDONATION] = [
	"$N'S $B, HOW THEY SHONE, THEY'LL BE MAD, NOW IT'S GONE!" ];
	
	charMessages[NAPPER][NEWGIFTS] = [
	"$N IS RATHER WISE, FOR THEIR $# GIFT$S EARNS THEM MY GOLDEN PRIZE!" ];
	