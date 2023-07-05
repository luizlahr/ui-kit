var m=Object.defineProperty;var t=(e,o)=>m(e,"name",{value:o,configurable:!0});import{a as c,b as n,c as a}from"./index.8bffd9e5.js";import{a as d,j as r}from"./jsx-runtime.037b6f9c.js";import"./polished.esm.e1dfb85e.js";import"./index.647e9efa.js";import"./iframe.3d7a71c0.js";import"./index.8ca24334.js";import"./index.4fad57b8.js";const k={component:c,parameters:{storySource:{source:`import type { Meta } from '@storybook/react'
import {
  Breadcrumb as BC,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbProps,
} from '@luizlahr-ui/react'

export default {
  component: BC,
  parameters: {
    layout: 'centered',
    docs: {
      docsPage: {
        controls: {
          disabled: true,
        },
      },
    },
  },
  title: 'Navigation/Breadcrumb',
} as Meta<{}>

export const Breadcrumb = (args: BreadcrumbProps) => (
  <BC {...args}>
    <BreadcrumbItem>
      <BreadcrumbLink to="#">Label 01</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbItem>
      <BreadcrumbLink to="#">Label 02</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbItem currentPage>
      <BreadcrumbLink to="#">Label 03</BreadcrumbLink>
    </BreadcrumbItem>
  </BC>
)
`,locationsMap:{breadcrumb:{startLoc:{col:26,line:24},endLoc:{col:1,line:36},startBody:{col:26,line:24},endBody:{col:1,line:36}}}},layout:"centered",docs:{docsPage:{controls:{disabled:!0}}}},title:"Navigation/Breadcrumb"},g=t(e=>d(c,{...e,children:[r(n,{children:r(a,{to:"#",children:"Label 01"})}),r(n,{children:r(a,{to:"#",children:"Label 02"})}),r(n,{currentPage:!0,children:r(a,{to:"#",children:"Label 03"})})]}),"Breadcrumb"),h=["Breadcrumb"];export{g as Breadcrumb,h as __namedExportsOrder,k as default};
//# sourceMappingURL=Breadcrumb.stories.e3548306.js.map
