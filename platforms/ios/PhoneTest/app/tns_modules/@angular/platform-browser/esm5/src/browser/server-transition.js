/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { APP_INITIALIZER, ApplicationInitStatus, InjectionToken, Injector } from '@angular/core';
import { getDOM } from '../dom/dom_adapter';
import { DOCUMENT } from '../dom/dom_tokens';
/**
 * An id that identifies a particular application being bootstrapped, that should
 * match across the client/server boundary.
 */
export var TRANSITION_ID = new InjectionToken('TRANSITION_ID');
export function appInitializerFactory(transitionId, document, injector) {
    return function () {
        // Wait for all application initializers to be completed before removing the styles set by
        // the server.
        injector.get(ApplicationInitStatus).donePromise.then(function () {
            var dom = getDOM();
            var styles = Array.prototype.slice.apply(dom.querySelectorAll(document, "style[ng-transition]"));
            styles.filter(function (el) { return dom.getAttribute(el, 'ng-transition') === transitionId; })
                .forEach(function (el) { return dom.remove(el); });
        });
    };
}
export var SERVER_TRANSITION_PROVIDERS = [
    {
        provide: APP_INITIALIZER,
        useFactory: appInitializerFactory,
        deps: [TRANSITION_ID, DOCUMENT, Injector],
        multi: true
    },
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLXRyYW5zaXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9wbGF0Zm9ybS1icm93c2VyL3NyYy9icm93c2VyL3NlcnZlci10cmFuc2l0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFBQyxlQUFlLEVBQUUscUJBQXFCLEVBQVUsY0FBYyxFQUFFLFFBQVEsRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFFdkgsT0FBTyxFQUFDLE1BQU0sRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBQzFDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUUzQzs7O0dBR0c7QUFDSCxNQUFNLENBQUMsSUFBTSxhQUFhLEdBQUcsSUFBSSxjQUFjLENBQUMsZUFBZSxDQUFDLENBQUM7QUFFakUsTUFBTSxnQ0FBZ0MsWUFBb0IsRUFBRSxRQUFhLEVBQUUsUUFBa0I7SUFDM0YsT0FBTztRQUNMLDBGQUEwRjtRQUMxRixjQUFjO1FBQ2QsUUFBUSxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7WUFDbkQsSUFBTSxHQUFHLEdBQUcsTUFBTSxFQUFFLENBQUM7WUFDckIsSUFBTSxNQUFNLEdBQ1IsS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsc0JBQXNCLENBQUMsQ0FBQyxDQUFDO1lBQ3hGLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBQSxFQUFFLElBQUksT0FBQSxHQUFHLENBQUMsWUFBWSxDQUFDLEVBQUUsRUFBRSxlQUFlLENBQUMsS0FBSyxZQUFZLEVBQXRELENBQXNELENBQUM7aUJBQ3RFLE9BQU8sQ0FBQyxVQUFBLEVBQUUsSUFBSSxPQUFBLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQWQsQ0FBYyxDQUFDLENBQUM7UUFDckMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDLENBQUM7QUFDSixDQUFDO0FBRUQsTUFBTSxDQUFDLElBQU0sMkJBQTJCLEdBQXFCO0lBQzNEO1FBQ0UsT0FBTyxFQUFFLGVBQWU7UUFDeEIsVUFBVSxFQUFFLHFCQUFxQjtRQUNqQyxJQUFJLEVBQUUsQ0FBQyxhQUFhLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztRQUN6QyxLQUFLLEVBQUUsSUFBSTtLQUNaO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtBUFBfSU5JVElBTElaRVIsIEFwcGxpY2F0aW9uSW5pdFN0YXR1cywgSW5qZWN0LCBJbmplY3Rpb25Ub2tlbiwgSW5qZWN0b3IsIFN0YXRpY1Byb3ZpZGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtnZXRET019IGZyb20gJy4uL2RvbS9kb21fYWRhcHRlcic7XG5pbXBvcnQge0RPQ1VNRU5UfSBmcm9tICcuLi9kb20vZG9tX3Rva2Vucyc7XG5cbi8qKlxuICogQW4gaWQgdGhhdCBpZGVudGlmaWVzIGEgcGFydGljdWxhciBhcHBsaWNhdGlvbiBiZWluZyBib290c3RyYXBwZWQsIHRoYXQgc2hvdWxkXG4gKiBtYXRjaCBhY3Jvc3MgdGhlIGNsaWVudC9zZXJ2ZXIgYm91bmRhcnkuXG4gKi9cbmV4cG9ydCBjb25zdCBUUkFOU0lUSU9OX0lEID0gbmV3IEluamVjdGlvblRva2VuKCdUUkFOU0lUSU9OX0lEJyk7XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBJbml0aWFsaXplckZhY3RvcnkodHJhbnNpdGlvbklkOiBzdHJpbmcsIGRvY3VtZW50OiBhbnksIGluamVjdG9yOiBJbmplY3Rvcikge1xuICByZXR1cm4gKCkgPT4ge1xuICAgIC8vIFdhaXQgZm9yIGFsbCBhcHBsaWNhdGlvbiBpbml0aWFsaXplcnMgdG8gYmUgY29tcGxldGVkIGJlZm9yZSByZW1vdmluZyB0aGUgc3R5bGVzIHNldCBieVxuICAgIC8vIHRoZSBzZXJ2ZXIuXG4gICAgaW5qZWN0b3IuZ2V0KEFwcGxpY2F0aW9uSW5pdFN0YXR1cykuZG9uZVByb21pc2UudGhlbigoKSA9PiB7XG4gICAgICBjb25zdCBkb20gPSBnZXRET00oKTtcbiAgICAgIGNvbnN0IHN0eWxlczogYW55W10gPVxuICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5zbGljZS5hcHBseShkb20ucXVlcnlTZWxlY3RvckFsbChkb2N1bWVudCwgYHN0eWxlW25nLXRyYW5zaXRpb25dYCkpO1xuICAgICAgc3R5bGVzLmZpbHRlcihlbCA9PiBkb20uZ2V0QXR0cmlidXRlKGVsLCAnbmctdHJhbnNpdGlvbicpID09PSB0cmFuc2l0aW9uSWQpXG4gICAgICAgICAgLmZvckVhY2goZWwgPT4gZG9tLnJlbW92ZShlbCkpO1xuICAgIH0pO1xuICB9O1xufVxuXG5leHBvcnQgY29uc3QgU0VSVkVSX1RSQU5TSVRJT05fUFJPVklERVJTOiBTdGF0aWNQcm92aWRlcltdID0gW1xuICB7XG4gICAgcHJvdmlkZTogQVBQX0lOSVRJQUxJWkVSLFxuICAgIHVzZUZhY3Rvcnk6IGFwcEluaXRpYWxpemVyRmFjdG9yeSxcbiAgICBkZXBzOiBbVFJBTlNJVElPTl9JRCwgRE9DVU1FTlQsIEluamVjdG9yXSxcbiAgICBtdWx0aTogdHJ1ZVxuICB9LFxuXTtcbiJdfQ==