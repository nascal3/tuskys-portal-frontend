import { State, Action, StateContext, Selector } from "@ngxs/store";
import { PageModel } from "../models/page.model";
import {AddPageRoute, RemovePageRoute} from "../actions/page.actions";

export class PageStateModel {
  pageRoute: PageModel;
}

@State<PageModel>({
  name: 'pageRoute',
  defaults: {
    page: '/'
  }
})

export class PageState {

  @Selector()
  static getActiveRoute(state: PageModel) {
    return state.page;
  }

  @Action(AddPageRoute)
  add({getState, patchState}: StateContext<PageModel>, {payload}: AddPageRoute ) {
    const state = getState();
    patchState({
      page: payload.page
    });
  }

  @Action(RemovePageRoute)
  remove({getState, patchState}: StateContext<PageModel>, {payload}: RemovePageRoute) {
    patchState({
      page: ''
    })
  }

}
