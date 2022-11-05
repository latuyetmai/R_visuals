import { formattingSettings } from "powerbi-visuals-utils-formattingmodel";
import FormattingSettingsCard = formattingSettings.Card;
import FormattingSettingsSlice = formattingSettings.Slice;
import FormattingSettingsModel = formattingSettings.Model;
/**
 * RCV Script Formatting Card
 */
declare class rcvScriptCardSettings extends FormattingSettingsCard {
    provider: FormattingSettingsSlice;
    source: FormattingSettingsSlice;
    name: string;
    displayName: string;
    slices: Array<FormattingSettingsSlice>;
}
/**
* visual settings model class
*
*/
export declare class VisualFormattingSettingsModel extends FormattingSettingsModel {
    rcvScriptCard: rcvScriptCardSettings;
    cards: rcvScriptCardSettings[];
}
export {};
