import { IRenderParameters } from './IRenderParameters'
export interface IhCaptchaInstance {
  /**
   * Executes the hCaptcha using the given widgetID
   * @param widgetID The hCaptcha widgetID.
   */
  execute(widgetID: string): void;

  /**
   * Removes the hcaptcha container
   * @param widgetID The hCaptcha widgetID.
   */
  remove(widgetID: string): void;

  /**
   * Gets the response for the hCaptcha widget with widgetID.
   * @param widgetID Optional unique ID for a widget. Defaults to first widget created.
   */
  getResponse(widgetID: string): string;
  
  /**
   * Will render the hCaptcha widget into the given container with the given parameters.
   * @param container The container into which the widget shall be rendered.
   * @param parameters The rendering parameters for the widget.
   */
  render(container: string | Element, parameters: IRenderParameters): string;

}
