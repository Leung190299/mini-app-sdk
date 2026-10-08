import { StyleSheet, Text, View, type TextProps, type ViewProps } from 'react-native';

import { useMiniAppTheme, type MiniAppTheme } from './theme';

export type MiniTextProps = TextProps & {
  variant?: 'default' | 'small' | 'smallBold' | 'subtitle' | 'link';
  tone?: 'primary' | 'secondary';
};

export function MiniText({ variant = 'default', tone = 'primary', style, ...rest }: MiniTextProps) {
  const { colors } = useMiniAppTheme();
  return (
    <Text
      style={[
        { color: tone === 'secondary' ? colors.textSecondary : colors.text },
        textStyles[variant],
        style,
      ]}
      {...rest}
    />
  );
}

export type MiniViewProps = ViewProps & {
  surface?: keyof Pick<MiniAppTheme['colors'], 'background' | 'surface' | 'surfaceSelected'>;
};

export function MiniView({ surface = 'background', style, ...rest }: MiniViewProps) {
  const { colors } = useMiniAppTheme();
  return <View style={[{ backgroundColor: colors[surface] }, style]} {...rest} />;
}

const textStyles = StyleSheet.create({
  default: { fontSize: 16, lineHeight: 24, fontWeight: 500 },
  small: { fontSize: 14, lineHeight: 20, fontWeight: 500 },
  smallBold: { fontSize: 14, lineHeight: 20, fontWeight: 700 },
  subtitle: { fontSize: 32, lineHeight: 44, fontWeight: 600 },
  link: { fontSize: 14, lineHeight: 30 },
});
