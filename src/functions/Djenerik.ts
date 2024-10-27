export const newElem = <T extends {name: string}>(arr: T[]) => {
	return arr[0]
}

newElem(
	[{
		name: 'test',
		date: 0
	}]
)
