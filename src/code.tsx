import schemaTypes from "./schema-types";
import toggleTypes from "./toggle-types";
import icons from "./icons";

const { widget } = figma
const { useSyncedState, usePropertyMenu, AutoLayout, Text, SVG, Input, Rectangle } = widget


function Widget() {
  console.log("Rendering widget...")
  const [fieldName, setFieldName] = useSyncedState("fieldName", "");
  const [schemaType, setSchemaType] = useSyncedState("schemaType", "String");
  const [isArray, setIsArray] = useSyncedState("isArray", false);
  const [isNonNullable, setIsNonNullable] = useSyncedState("isNonNullable", false);
  const [isHidden, setIsHidden] = useSyncedState("isHidden", false);

  // Property menu
  const propertyMenuItems: Array<WidgetPropertyMenuItem> = [];

  propertyMenuItems.push({
    tooltip: 'Hide Type',
    propertyName: 'Hide',
    itemType: 'toggle',
    isToggled: isHidden,
    icon: `<svg fill="#FFFFFF" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><g><path d="m8.29661 8.3949c-.40764.38823-.65494.90322-.69667 1.45081l-1.09202 1.03429c-.16024-.5796-.15816-1.18901.00603-1.76757.1642-.57856.48476-1.10602.92975-1.5298.44498-.42379.99883-.72908 1.60634-.88545.6075-.15637 1.24746-.15835 1.85596-.00575l-1.08599 1.04c-.57499.03974-1.11575.27525-1.5234.66347z"/><path clip-rule="evenodd" d="m15.5202 5.55429c1.5589 1.06687 2.756 2.54468 3.4441 4.25142.0476.12555.0476.26299 0 .38859-.7058 1.7385-1.9309 3.2419-3.5241 4.3245-1.5931 1.0826-3.4844 1.6969-5.4402 1.7669-1.58161-.0243-3.12975-.4377-4.49411-1.2l-3.06009 2.9143-.84602-.8057 15.95442-15.1943.846.80571zm-3.4471 5.58371c.2117-.3455.3244-.7379.327-1.138-.0044-.40248-.1203-.79672-.336-1.14286l-3.26412 3.10856c.36379.2001.77635.3057 1.19643.3063.42009.0006.83299-.1038 1.19739-.3028s.6676-.4856.8793-.8312zm-5.67319 3.102c1.10637.5722 2.3413.8819 3.60009.9029 3.1801 0 6.5402-2.2458 7.7582-5.1429-.6486-1.46547-1.7253-2.72287-3.1021-3.62286l-1.722 1.64c.481.66019.7032 1.46031.6279 2.26066-.0753.8003-.4435 1.55-1.0401 2.1182s-1.3838.9188-2.2242.9906c-.84038.0717-1.68053-.1399-2.37375-.598z" fill-rule="evenodd"/><path d="m4.40184 12.9086-.85803.8114c-1.11577-.9708-1.9751-2.1788-2.50806-3.5257-.047665-.1256-.047665-.26304 0-.38859.70571-1.73848 1.93086-3.24193 3.52401-4.32452 1.59316-1.08259 3.48449-1.69686 5.44023-1.7669 1.14461.01334 2.27561.23847 3.33011.66285l-.93.89143c-.7708-.26212-1.5818-.40114-2.40011-.41143-3.18009 0-6.54018 2.24572-7.75821 5.14286.4824 1.1113 1.22056 2.1052 2.16006 2.9086z"/></g></svg>`,
  });

  propertyMenuItems.push({
    itemType: 'separator',
  });

  schemaTypes.forEach((item) => {
    propertyMenuItems.push({
      tooltip: item.label,
      propertyName: item.title,
      itemType: 'toggle',
      isToggled: item.title === schemaType ? true : false,
      icon: item.icon,
    });
  });

  propertyMenuItems.push({
    itemType: 'separator',
  });

  propertyMenuItems.push(
    {
      tooltip: 'Array',
      propertyName: 'Array',
      itemType: 'toggle',
      isToggled: isArray,
      icon: `<svg fill="#FFFFFF" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="m1.875 3.33337c0-.34517.27982-.625.625-.625h3.33333c.34518 0 .625.27983.625.625 0 .34518-.27982.625-.625.625h-2.70833v12.08333h2.70833c.34518 0 .625.2798.625.625s-.27982.625-.625.625h-3.33333c-.34518 0-.625-.2798-.625-.625zm11.6667 0c0-.34517.2798-.625.625-.625h3.3333c.3452 0 .625.27983.625.625v13.33333c0 .3452-.2798.625-.625.625h-3.3333c-.3452 0-.625-.2798-.625-.625s.2798-.625.625-.625h2.7083v-12.08333h-2.7083c-.3452 0-.625-.27982-.625-.625zm-7.50003 10.00003c0-.3452.27982-.625.625-.625h.00833c.34518 0 .625.2798.625.625s-.27982.625-.625.625h-.00833c-.34518 0-.625-.2798-.625-.625zm3.33333 0c0-.3452.27982-.625.625-.625h.0083c.3452 0 .625.2798.625.625s-.2798.625-.625.625h-.0083c-.34518 0-.625-.2798-.625-.625zm3.3333 0c0-.3452.2799-.625.625-.625h.0084c.3451 0 .625.2798.625.625s-.2799.625-.625.625h-.0084c-.3451 0-.625-.2798-.625-.625z" fill="#FFFFFF" fill-rule="evenodd"/></svg>`,
    },
    {
      tooltip: 'Non-Nullable',
      propertyName: 'NonNullable',
      itemType: 'toggle',
      isToggled: isNonNullable,
      icon: `<svg fill="#FFFFFF" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><g><path d="m9.47915 12.658c.15417-.103.33543-.158.52085-.158.2486 0 .4871.0988.6629.2746s.2746.4143.2746.6629c0 .1854-.055.3667-.158.5208-.103.1542-.2494.2744-.4207.3453-.1713.071-.35984.0896-.5417.0534-.18185-.0362-.3489-.1255-.48001-.2566s-.2204-.2981-.25658-.48c-.03617-.1819-.0176-.3704.05335-.5417.07096-.1713.19112-.3177.34529-.4207z"/><path d="m10.625 5.625h-1.25v5.625h1.25z"/><path clip-rule="evenodd" d="m3.75 17.5h12.5c.3314-.0003.6492-.1321.8835-.3665.2344-.2343.3662-.5521.3665-.8835v-12.5c-.0003-.33142-.1321-.64917-.3665-.88352-.2343-.23435-.5521-.36615-.8835-.36648h-12.5c-.33142.00033-.64917.13213-.88352.36648s-.36615.5521-.36648.88352v12.5c.00033.3314.13213.6492.36648.8835.23435.2344.5521.3662.88352.3665zm0-1.25v-12.5h12.5l.0006 12.5z" fill-rule="evenodd"/></g></svg>`,
    }
  );

  async function onChange({
    propertyName,
  }: WidgetPropertyEvent): Promise<void> {
    await new Promise<void>(function (resolve: () => void): void {
      if (propertyName === "Array") {
        setIsArray(!isArray);
      } else if (propertyName === "NonNullable") {
        setIsNonNullable(!isNonNullable)
      } else if (propertyName === "Hide") {
        setIsHidden(!isHidden);
      } else {
        const updatedItem = schemaTypes.find((i) => i.title === propertyName);
        if (updatedItem) {
          setSchemaType(updatedItem.title)
        };
      }
      console.log("Firing")
      figma.closePlugin();
    });
  }

  usePropertyMenu(propertyMenuItems, onChange);

  const inputColor = schemaType === 'Union' || schemaType === 'Enum' || schemaType === 'Scalar' || schemaType === 'Custom' ? '#C3AAFF' : '#FFFFFF'
  const formattedType = ''.concat(isArray === true ? (`[${schemaType}]`) : (`${schemaType}`), isNonNullable === true ? `!` : '')


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
      {isHidden === false ? (
        <>
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
            <Text fontSize={16} fontFamily="Space Mono" fontWeight="normal" horizontalAlignText={'left'} fill={'#1BCDF4'} width={'fill-parent'}>
              {formattedType}
            </Text>
            <SVG
              src={icons[schemaType]}
            />
          </AutoLayout>
          <Rectangle height={2} width={'fill-parent'} fill={'#3E4555'} />
        </>
      ) : null}
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
        <Input value={fieldName} onTextEditEnd={(e) => {
          setFieldName(e.characters)
        }}
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
}

widget.register(Widget)
