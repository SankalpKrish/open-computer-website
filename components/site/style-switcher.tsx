"use client";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { Check } from "lucide-react";
import { RadioGroup } from "@/components/ui/radio-group";
import { isSiteStyle, siteStyles } from "@/lib/site-styles";
import { useSiteStyle } from "./style-provider";
export function StyleSwitcher() {
  const { style, setStyle } = useSiteStyle();
  return <aside className="style-switcher" aria-label="Website design styles">
    <RadioGroup className="style-options" aria-label="Choose website style" orientation="horizontal" value={style} onValueChange={(value) => { if (isSiteStyle(value)) setStyle(value); }}>
      {siteStyles.map((item) => <RadioGroupPrimitive.Item key={item.id} value={item.id} className="style-option" aria-label={item.name}>
        <span className="style-swatches" aria-hidden="true">{item.colors.map((color) => <i key={color} style={{ background: color }} />)}</span><span>{item.name}</span>{style === item.id && <Check size={13} className="style-check" aria-hidden="true" />}
      </RadioGroupPrimitive.Item>)}
    </RadioGroup><span className="sr-only" role="status">{siteStyles.find((item) => item.id === style)?.name} style selected</span>
  </aside>;
}
