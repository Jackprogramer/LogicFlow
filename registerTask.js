import Vue from "vue";
import GateWay from "./Task.vue";
import { HtmlResize } from "@logicflow/extension";

export default function registerConnect(lf) {
  lf.register("task", () => {
    class TaskNode extends HtmlResize.view {
      setHtml(rootEl) {
        const { nodeName} = this.props.model.properties;
        const el = document.createElement("div");
        rootEl.innerHTML = "";
        rootEl.appendChild(el);
        const Profile = Vue.extend({
          render: function (h) {
            return h(GateWay, {
              props: {
                nodeName,
              },
            });
          },
        });
        new Profile().$mount(el);
      }
    }

    class TaskNodeModel extends HtmlResize.model {
      //初始化任务节点
      initNodeData(data) {
        super.initNodeData(data);
        //初始化节点数据
        this.properties.nodeName = "任务";
        this.properties.assignUserList = [];
        this.properties.assignType = { id:1 ,assignType: "nodeSetting", assignTypeName: "节点设置" };
        //自定义样式
        this.width = 100;
        this.height = 50;
      }

      getConnectedSourceRules() {
        const rules = super.getConnectedSourceRules();
        //通用连接规则
        const commonRule = {
          message: "节点间最多只允许有一条连线",
          validate: (sourceNode, targetNode, sourceAnchor, targetAnchor) => {
            const edgesModels = this.graphModel.getNodeEdges(sourceNode.id);
            if (
              edgesModels === undefined ||
              edgesModels === null ||
              edgesModels.length === 0
            )
              return true;
            const result = edgesModels.filter(
              (item) =>
                item.sourceNodeId == sourceNode.id &&
                item.targetNodeId == targetNode.id
            );
            if (result.length === 0) return true;
            return false;
          },
        };
        rules.push(commonRule);
        return rules;
      }
    }

    return {
      model: TaskNodeModel,
      view: TaskNode,
    };
  });
}
