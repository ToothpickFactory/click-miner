/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */

import '@stencil/core';

declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLElement {
    componentOnReady?: () => Promise<this | null>;
  }

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}
}

import {
  Resource,
} from './models/Resource';
import {
  coordinates,
} from './interfaces/coordinates';

declare global {

  namespace StencilComponents {
    interface AppRoot {
      'disperseResources': (resource: Resource, origin: coordinates) => void;
    }
  }

  interface HTMLAppRootElement extends StencilComponents.AppRoot, HTMLStencilElement {}

  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };
  interface HTMLElementTagNameMap {
    'app-root': HTMLAppRootElement;
  }
  interface ElementTagNameMap {
    'app-root': HTMLAppRootElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'app-root': JSXElements.AppRootAttributes;
    }
  }
  namespace JSXElements {
    export interface AppRootAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface ResourceNode {
      'resource': any | Resource;
    }
  }

  interface HTMLResourceNodeElement extends StencilComponents.ResourceNode, HTMLStencilElement {}

  var HTMLResourceNodeElement: {
    prototype: HTMLResourceNodeElement;
    new (): HTMLResourceNodeElement;
  };
  interface HTMLElementTagNameMap {
    'resource-node': HTMLResourceNodeElement;
  }
  interface ElementTagNameMap {
    'resource-node': HTMLResourceNodeElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'resource-node': JSXElements.ResourceNodeAttributes;
    }
  }
  namespace JSXElements {
    export interface ResourceNodeAttributes extends HTMLAttributes {
      'resource'?: any | Resource;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface ResourceShard {
      'initLeft': number;
      'initTop': number;
      'resource': any | Resource;
    }
  }

  interface HTMLResourceShardElement extends StencilComponents.ResourceShard, HTMLStencilElement {}

  var HTMLResourceShardElement: {
    prototype: HTMLResourceShardElement;
    new (): HTMLResourceShardElement;
  };
  interface HTMLElementTagNameMap {
    'resource-shard': HTMLResourceShardElement;
  }
  interface ElementTagNameMap {
    'resource-shard': HTMLResourceShardElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'resource-shard': JSXElements.ResourceShardAttributes;
    }
  }
  namespace JSXElements {
    export interface ResourceShardAttributes extends HTMLAttributes {
      'initLeft'?: number;
      'initTop'?: number;
      'resource'?: any | Resource;
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }
