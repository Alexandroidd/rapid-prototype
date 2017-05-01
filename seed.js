var db = require('./models');

var emoticonsList = [
	{
		image: '>:[',
		name: 'Meanhead Guy',
		status: 'cool'
	},
	{
		image: '}:‑)',
		name: 'Nice-Eyebrows dude',
		status: 'cool'
	},
	{
		image: '~(_8^(I)',
		name: 'Homer Simpson',
		status: 'cool'
	},
	{
		image: '7:^]',
		name: 'Ronald Reagan',
		status: 'cool'
	},
	{
		image: '(-_-)zzz',
		name: 'Sleepy dude',
		status: 'cool'
	},
	{
		image: 'ヽ(^。^)ノ',
		name: 'Wicked Happy dude',
		status: 'bangin'
	},
	{
		image: '(ノಠ益ಠ)ノ彡┻━┻',
		name: 'YO FLIP THE TABLE',
		status: 'bangin'
	},
	{
		image: '●～*',
		name: 'ITS DA BOMB',
		status: 'bangin'
	},
	{
		image: 'ヽ(´ー`)人(´∇｀)人(`Д´)ノ',
		name: 'CLUB GOING UP!',
		status: 'bangin'
	},
	{
		image: '♪┏(・o･)┛♪┗ ( ･o･) ┓',
		name: 'ITS LIT AF RN!',
		status: 'bangin'
	},
	{
		image: '(☞ﾟヮﾟ)☞',
		name: 'YO LETS GO THAT WAY',
		status: 'bangin'
	}
];

db.Emoticon.remove({}, function(err,emoticons){
	if(err){console.log('remove error' + err);}
	db.Emoticon.create(emoticonsList, function(err,emoticons){
		console.log('Created ' + emoticonsList.length + ' emoticons!');
	});
});



