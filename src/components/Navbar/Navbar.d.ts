export interface NavbarProps {
  title: string;
  links: NavbarLink[];
  children?: React.ReactNode;
  avatar?: string;
}

export interface NavbarLink {
  label?: string;
  url: string;
  icon: OverridableComponent<SvgIconTypeMap<object, "svg">> & {
    muiName: string;
  }
  style?: React.CSSProperties;
}

export interface NavbarButton {
  label?: string;
  onClick: () => void;
  props: JSX.IntrinsicElements['div']
}