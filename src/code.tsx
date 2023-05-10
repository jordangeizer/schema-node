import schemaTypes from "./schema-types";
import { Layout } from "./layout";
import icons from "./icons";

const { widget } = figma
const { useSyncedState, usePropertyMenu } = widget


function Widget() {
  const [fieldName, setFieldName] = useSyncedState("fieldName", "");
  const [schemaType, setSchemaType] = useSyncedState("schemaType", "String");
  const [isArray, setIsArray] = useSyncedState("isArray", false);
  const [isNonNullable, setIsNonNullable] = useSyncedState("isNonNullable", false);
  const [layoutMode, setLayoutMode] = useSyncedState("layoutMode", "EXPANDED");
  const layoutModeOptions = [{ option: "EXPANDED", label: "Exanded" }, { option: "COMPACT", label: "Compact" }, { option: "CONCISE", label: "Concise" }, { option: "NODE", label: "Node" }]

  // Property menu
  const propertyMenuItems: Array<WidgetPropertyMenuItem> = [];

  propertyMenuItems.push({
    itemType: 'dropdown',
    tooltip: 'Layout mode',
    propertyName: 'layoutMode',
    options: layoutModeOptions,
    selectedOption: layoutMode
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
    propertyName, propertyValue
  }: WidgetPropertyEvent): Promise<void> {
    await new Promise<void>(function (resolve: () => void): void {
      if (propertyName === "Array") {
        setIsArray(!isArray);
      } else if (propertyName === "NonNullable") {
        setIsNonNullable(!isNonNullable)
      } else if (propertyName === "layoutMode" && propertyValue !== layoutMode) {
        setLayoutMode(propertyValue!)
      } else if (
        propertyName === 'String' ||
        propertyName === 'Int' ||
        propertyName === 'Float' ||
        propertyName === 'Boolean' ||
        propertyName === 'ID' ||
        propertyName === 'Union' ||
        propertyName === 'Enum' ||
        propertyName === 'Scalar' ||
        propertyName === 'Custom') {
        if (propertyName !== schemaType) {
          setSchemaType(propertyName)
        }
      }
      figma.closePlugin();
    });
  }

  usePropertyMenu(propertyMenuItems, onChange);

  const inputColor = schemaType === 'Union' || schemaType === 'Enum' || schemaType === 'Scalar' || schemaType === 'Custom' ? '#C3AAFF' : '#FFFFFF'
  const formattedType = ''.concat(isArray === true ? (`[${schemaType}]`) : (`${schemaType}`), isNonNullable === true ? `!` : '')

  return (
    <Layout
      icon={icons[schemaType]}
      inputColor={inputColor}
      inputValue={fieldName}
      layoutMode={layoutMode}
      mode={layoutMode}
      typeLabel={formattedType}
      updateText={(e: Record<string, string>) => {
        setFieldName(e.characters)
      }} />
  )
}

widget.register(Widget)
