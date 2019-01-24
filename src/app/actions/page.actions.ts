import { PageModel } from "../models/page.model";

export class AddPageRoute {
  static readonly type = '[PAGE] Add';

  constructor(public payload: PageModel) {}
}

export class RemovePageRoute {
  static readonly type = '[PAGE] Remove';

  constructor(public payload: string) {}
}
