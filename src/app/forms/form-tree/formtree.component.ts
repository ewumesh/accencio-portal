import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { PageTitleService } from '../../core/page-title/page-title.service';
import { TreeNode, TREE_ACTIONS, KEYS, IActionMapping } from 'angular-tree-component';
import { TranslateService } from '@ngx-translate/core';

const actionMapping:IActionMapping = {

   mouse: {
      contextMenu: (tree, node, $event) => {
         $event.preventDefault();
         alert(`context menu for ${node.data.name}`);
      },
      dblClick: (tree, node, $event) => {
        if (node.hasChildren) TREE_ACTIONS.TOGGLE_EXPANDED(tree, node, $event);
      },
      click: (tree, node, $event) => {
         $event.shiftKey
         ? TREE_ACTIONS.TOGGLE_ACTIVE_MULTI(tree, node, $event)
         : TREE_ACTIONS.TOGGLE_ACTIVE(tree, node, $event)
      }
   },
   keys: {
      [KEYS.ENTER]: (tree, node, $event) => alert(`This is ${node.data.name}`)
   }
};

@Component({
   selector: 'ms-fulltree',
   templateUrl:'./formtree-component.html',
   styleUrls: ['./formtree-component.scss'],
   encapsulation: ViewEncapsulation.None
})

export class FormTreeComponent implements OnInit {

   nodes  : any[];
   nodes2 = [{name: 'root'}, {name: 'root2'}];

   asyncChildren = [
      {
         name: 'child2.1',
         subTitle: 'new and improved'
      }, {
         name: 'child2.2',
         subTitle: 'new and improved2'
      }
   ];

   customTemplateStringOptions = {
      // displayField: 'subTitle',
      isExpandedField: 'expanded',
      idField: 'uuid',
      getChildren: this.getChildren.bind(this),
      actionMapping,
      nodeHeight: 23,
      allowDrag: true,
      useVirtualScroll: true
   }

   constructor(private pageTitleService: PageTitleService,
               public translate: TranslateService) {}

   ngOnInit() {
      this.translate.get('Tree').subscribe((res: string) => {
         this.pageTitleService.setTitle(res);
      });
      
      setTimeout(() => {
         this.nodes = [
         {
            expanded: true,
            name: 'root expanded',
            subTitle: 'the root',
            children: [
               {
                  name: 'child1',
                  subTitle: 'a good child',
                  hasChildren: false
               }, {
                  name: 'child2',
                  subTitle: 'a bad child',
                  hasChildren: false
               }
            ]
         },
         {
            name: 'root2',
            subTitle: 'the second root',
            children: [
               {
                  name: 'child2.1',
                  subTitle: 'new and improved',
                  hasChildren: false
               }, {
                  name: 'child2.2',
                  subTitle: 'new and improved2',
                  children: [
                  {
                     uuid: 1001,
                     name: 'subsub',
                     subTitle: 'subsub',
                     hasChildren: false
                  }]
               }
            ]
         },
         {
            name: 'asyncroot',
            hasChildren: true
         }];
      }, 1);
   }

   // getChildren method is used whenever a node is expanded, the hasChildren field is true, and the children field is empty.
   getChildren(node:any) {
      return new Promise((resolve, reject) => {
         setTimeout(() => resolve(this.asyncChildren.map((c) => {
            return Object.assign({}, c, {
               hasChildren: node.level < 5
            });
         })), 1000);
      });
   }

   //addNode method is used to add a node from the tree.
   addNode(tree) {
      this.nodes[0].children.push({
         name: 'a new child'
      });
      tree.treeModel.update();
   }

   //childrenCount method is used to return the node children length. 
   childrenCount(node: TreeNode): string {
      return node && node.children ? `(${node.children.length})` : '';
   }

   // filterNodes is used to Filtering on the tree will ensure that if a node is visible, then all its ancestors are also visible.
   filterNodes(text, tree) {
      tree.treeModel.filterNodes(text);
   }

   //activateSubSub method is used to activate inner node.
   activateSubSub(tree) {
   // tree.treeModel.getNodeBy((node) => node.data.name === 'subsub')
      tree.treeModel.getNodeById(1001)
      .setActiveAndVisible();
   }

   //go method is used to when click on custom action, alert message is show. 
   go($event) {
      $event.stopPropagation();
      alert('this method is on the app component');
   }

   //activeNodes method is used to activate the node.
   activeNodes(treeModel) {
      console.log(treeModel.activeNodes);
   }

}



