import { h, Fragment } from 'preact';

import Stack from './Stack';

const App = () => (
	<Stack cards={[
		['Lässt du gute Freund*innen in der Schule/Uni/Ausbildung abschreiben?', 3, -3, `YouGov/Sinus fragten 2018 mehr als 2.000 Personen, wodurch sich eine gute Freundschaft auszeichnet. 70 Prozent gaben an, dass gute Freunde füreinander da sind, wenn eine*r Hilfe braucht.`, 'Quelle: YouGov, Zeile 218'],
		['Bist du schon mal in eine andere Stadt gezogen?', -1, 1, `YouGov/Sinus fragten mehr als 2.000 Personen, warum eine Freundschaft enden kann. Fast die Hälfte (46%) der 18-24-Jährigen gaben räumliche Trennung als Grund an.`, 'Quelle: YouGov, Zeile 384'],
		['Bist du mit deinen Freund*innen oft in den sozialen Netzwerke in Kontakt?', -3, 3, `Echte Freundschaften kann man nur im „richtigen Leben“ bzw. offline führen. Dieser Behauptung stimmten 74 Prozent der über 2.000 in einer YouGov/Sinus-Studie befragten Personen zu.`, 'Quelle: YouGov, Zeile 331+Zeile 332'],
		['Ist es dir wichtig, dass deine Freund*innen den gleichen Bildungsstand haben wie du?', -2, 2, `Mehr als die Hälfte (58%) der über 2.000 in einer YouGov/Sinus-Studie befragten Personen haben angeblich enge Freunde, die einen geringeren Bildungsstand haben als sie selbst. Bei den 18–24-Jährigen sind es sogar 71 Prozent.`, 'Quelle: Sinus/YouGov, Zeile 234'],
		['Müllst du deine Wohnung mit deinem Krempel voll?', -3, 3],
		['Kannst du dir vorstellen, mit jemandem aus deinem Freundeskreis zu schlafen?', -1, 1],
		['Bist du Single?', 2, -2],
		['Hast du heute schon über einen Freund gelästert?', -2, 4]
	]}
	/>
);

export default App;
