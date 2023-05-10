const { widget } = figma
const { AutoLayout, Text, SVG, Input, Rectangle } = widget

interface layout {
	icon: string,
	inputColor: string,
	inputValue: string,
	layoutMode: string
	mode: string,
	typeLabel: string,
	updateText: any,
}

export const Layout = ({ layoutMode, icon, typeLabel, inputColor, inputValue, updateText }: layout) => {
	if (layoutMode === 'EXPANDED') {
		return (
			<AutoLayout
				verticalAlignItems={'center'}
				spacing={0}
				padding={0}
				cornerRadius={8}
				fill={'#282C34'}
				direction={'vertical'}
				width={360}
			>
				<AutoLayout
					verticalAlignItems={'center'}
					spacing={4}
					positioning={'auto'}
					padding={
						{
							top: 12,
							left: 16,
							bottom: 12,
							right: 16
						}
					}
					width={'fill-parent'}
					height={'hug-contents'}
					direction="horizontal"
				>
					<Text fontSize={16} fontFamily="Space Mono" fontWeight="normal" horizontalAlignText={'left'} fill={'#00BBFF'} width={'fill-parent'}>
						{typeLabel}
					</Text>
					<SVG
						src={icon}
					/>
				</AutoLayout>
				<Rectangle height={2} width={'fill-parent'} fill={'#00A6FF'} />
				<AutoLayout
					verticalAlignItems={'center'}
					spacing={4}
					positioning="auto"
					padding={
						{
							top: 12,
							left: 16,
							bottom: 12,
							right: 16
						}
					}
					width={'fill-parent'}
					height={'hug-contents'}
					direction="horizontal"
				>
					<Input value={inputValue} onTextEditEnd={(e) => updateText(e)}
						placeholder="Field name..."
						fontSize={16}
						fontFamily="Space Mono"
						fontWeight="normal"
						horizontalAlignText={'left'}
						fill={inputColor}
						width={'fill-parent'}
					/>
				</AutoLayout>
			</AutoLayout>
		)
	} else {
		return (<AutoLayout
			verticalAlignItems={'center'}
			spacing={0}
			padding={0}
			cornerRadius={8}
			fill={'#282C34'}
			direction={'vertical'}
			width={360}
		/>)
	}
}