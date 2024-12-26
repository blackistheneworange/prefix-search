const DUMMY_DATA = [
  "Your heart is the size of an ocean. Go find yourself in its hidden depths.",
  "The Bay of Bengal is hit frequently by cyclones. The months of November and May, in particular, are dangerous in this regard.",
  "Thinking is the capital, Enterprise is the way, Hard Work is the solution.",
  "If You Can'T Make It Good, At Least Make It Look Good.",
  "Heart be brave. If you cannot be brave, just go. Love's glory is not a small thing.",
  "It is bad for a young man to sin; but it is worse for an old man to sin.",
  "If You Are Out To Describe The Truth, Leave Elegance To The Tailor.",
  "O man you are busy working for the world, and the world is busy trying to turn you out.",
  "While children are struggling to be unique, the world around them is trying all means to make them look like everybody else.",
  "These Capitalists Generally Act Harmoniously And In Concert, To Fleece The People.",
  "I Don'T Believe In Failure. It Is Not Failure If You Enjoyed The Process.",
  "Do not get elated at any victory, for all such victory is subject to the will of God.",
  "Wear gratitude like a cloak and it will feed every corner of your life.",
  "If you even dream of beating me you'd better wake up and apologize.",
  "I Will Praise Any Man That Will Praise Me.",
  "One Of The Greatest Diseases Is To Be Nobody To Anybody.",
  "I'm so fast that last night I turned off the light switch in my hotel room and was in bed before the room was dark.",
  "People Must Learn To Hate And If They Can Learn To Hate, They Can Be Taught To Love.",
  "Everyone has been made for some particular work, and the desire for that work has been put in every heart.",
  "The less of the World, the freer you live.",
  "Respond to every call that excites your spirit.",
  "The Way To Get Started Is To Quit Talking And Begin Doing.",
  "God Doesn'T Require Us To Succeed, He Only Requires That You Try.",
  "Speak any language, Turkish, Greek, Persian, Arabic, but always speak with love.",
  "Happiness comes towards those which believe in him.",
  "Knowledge is of two kinds: that which is absorbed and that which is heard. And that which is heard does not profit if it is not absorbed.",
  "When I am silent, I have thunder hidden inside.",
  "Technological Progress Is Like An Axe In The Hands Of A Pathological Criminal.",
  "No One Would Choose A Friendless Existence On Condition Of Having All The Other Things In The World.",
  "Life is a gamble. You can get hurt, but people die in plane crashes, lose their arms and legs in car accidents; people die every day. Same with fighters: some die, some get hurt, some go on. You just don't let yourself believe it will happen to you.",
  "The End Of Life Is To Be Like God, And The Soul Following God Will Be Like Him.",
  "Let us sacrifice our today so that our children can have a better tomorrow.",
  "Your task is not to seek for love, but merely to seek and find all the barriers within yourself that you have built against it.",
  "In every religion there is love, yet love has no religion.",
  "Everything in the universe is within you. Ask all from yourself.",
  "I'm not a handsome guy, but I can give my hand to someone who needs help. Beauty is in the heart, not in the face.",
  "What Do I Wear In Bed? Why, Chanel No. 5, Of Course.",
  "A Good Head And A Good Heart Are Always A Formidable Combination.",
  "The Soul Never Thinks Without A Picture.",
  "In your light I learn how to love. In your beauty, how to make poems. You dance inside my chest where no-one sees you, but sometimes I do, and that sight becomes this art.",
  "Let the beauty we love be what we do. There are hundreds of ways to kneel and kiss the ground.",
  "If You Like Your Brother And He'S Prospering, You'Ll Be Pleased For Him.",
  "Success Is Dependent Upon The Glands - Sweat Glands.",
  "Champions are not generated from the championship. Champion is generated from something they have in them, desires, dreams, and visions.",
  "No matter what is the environment around you, it is always possible to maintain your brand of integrity.",
  "Applause Waits On Success.",
  "Just As Courage Imperils Life, Fear Protects It.",
  "It'S Better To Be A Lion For A Day Than A Sheep All Your Life.",
  "The Devil'S Voice Is Sweet To Hear.",
  "Sometimes the people with the worst past, create the best future.",
  "Every day, nay every moment, try to do some good deed.",
  "No Matter What People Tell You, Words And Ideas Can Change The World.",
  "Champions have to have the skill and the will. But the will must be stronger than the skill.",
  "Men Occasionally Stumble Over The Truth, But Most Of Them Pick Themselves Up And Hurry Off As If Nothing Had Happened.",
  "Goodbyes are only for those who love with their eyes. Because for those who love with heart and soul there is no such thing as separation.",
  "The best revenge is to improve yourself.",
  "God gave me this illness to remind me that I'm not Number One; He is.",
  "Success Is A Personal Standard, Reaching For The Highest That Is In Us, Becoming All That We Can Be.",
  "When You Have Really Exhausted An Experience You Always Reverence And Love It.",
  "Now you see me, now you don't. George thinks he will, but I know he won't!",
  "Elegance Does Not Consist In Putting On A New Dress.",
  "It Is Always Consoling To Think Of Suicide: In That Way One Gets Through Many A Bad Night.",
  "Eating Words Has Never Given Me Indigestion.",
  "India has to be transformed into a developed nation, a prosperous nation and a healthy nation, with a value system.",
  "It's not bragging if you can back it up.",
  "I Wish People Would Love Everybody Else The Way They Love Me. It Would Be A Better World.",
  "Why do I want my wife to show off her panties when the wind blows? Horses show their behinds, and cows and mules, not humans.",
  "Words Are Only Painted Fire; A Look Is The Fire Itself.",
  "Words, Without Power, Is Mere Philosophy.",
  "The cure for pain is in the pain.",
  "Whatever happens, just keep smiling and lose yourself in Love.",
  "Do The Right Thing. It Will Gratify Some People And Astonish The Rest.",
  "Only the soul knows what love is.",
  "Earning of livelihood by following some profession is better than living on charity.",
  "Burdens are the foundations of ease and bitter things the forerunners of pleasure.",
  "Too Many Have Dispensed With Generosity In Order To Practice Charity.",
  "Even the greatest was once a beginner. Don't be afraid to take that first step.",
  "No Great Intellectual Thing Was Ever Done By Great Effort.",
  "To fight against one's desires is the greatest of all fights.",
  "Innovation Distinguishes Between A Leader And A Follower.",
  "We Enjoy The Process Far More Than The Proceeds.",
  "When I Started Counting My Blessings, My Whole Life Turned Around.",
  "This being human is a guest house. Every morning a new arrival. Welcome and entertain them all!",
  "All My Life I'Ve Looked At Words As Though I Were Seeing Them For The First Time.",
  "Waiting Is Painful. Forgetting Is Painful. But Not Knowing Which To Do Is The Worse Kind Of Suffering.",
  "Never Allow Someone To Be Your Priority While Allowing Yourself To Be Their Option.",
  "To Jaw-Jaw Is Always Better Than To War-War.",
  "That'S The Real Trouble With The World, Too Many People Grow Up",
  "It Is Easier To Stay Out Than Get Out.",
  "The worst man is the one who sees himself as the best.",
  "The World Breaks Everyone, And Afterward, Some Are Strong At The Broken Places.",
  "Rule No.1: Never Lose Money. Rule No.2: Never Forget Rule No.1.",
  "Convergence of our views on global trade issues under the WTO and our common resolve to combat terrorism provide a valuable base for mutual understanding.",
  "Whenever You Find Yourself On The Side Of The Majority, It Is Time To Pause And Reflect.",
  "Whatever Is Done For Love Always Occurs Beyond Good And Evil.",
  "Things Should Be Made As Simple As Possible, But Not Any Simpler.",
  "Stop acting so small. You are the universe in ecstatic motion.",
  "All Truth Is Simple... Is That Not Doubly A Lie?",
  "Money Is Only A Tool. It Will Take You Wherever You Wish, But It Will Not Replace You As The Driver.",
  "The fight is won or lost far away from witnesses - behind the lines, in the gym, and out there on the road, long before I dance under those lights."
];

export default DUMMY_DATA;