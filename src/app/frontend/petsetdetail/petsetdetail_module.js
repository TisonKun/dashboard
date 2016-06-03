// Copyright 2015 Google Inc. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import chromeModule from 'chrome/chrome_module';
import componentsModule from 'common/components/components_module';
import eventsModule from 'events/events_module';
import filtersModule from 'common/filters/filters_module';
import stateConfig from './petsetdetail_stateconfig';
import {petSetInfoComponent} from './petsetinfo_component';

/**
 * Angular module for the Pet Set details view.
 *
 * The view shows detailed view of a Pet Set.
 */
export default angular
    .module(
        'kubernetesDashboard.petSetDetail',
        [
          'ngMaterial',
          'ngResource',
          'ui.router',
          componentsModule.name,
          filtersModule.name,
          eventsModule.name,
          chromeModule.name,
        ])
    .config(stateConfig)
    .component('kdPetSetInfo', petSetInfoComponent);