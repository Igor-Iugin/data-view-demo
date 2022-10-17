export function morph(number: number, words: string[]) {
	return words[(number % 100 > 4 && number % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(number % 10 < 5) ? Math.abs(number) % 10 : 5]];
}

export function morphDays(number: number) {
	const days = ['день', 'дни', 'дней']
	return `${number} ${morph(number, days)}`
}