document.addEventListener("DOMContentLoaded", function () {
    const tree = document.getElementById("tree");
  
   
    const treeData = [
      {
        label: "Sección 1:adobe indesign",
        children: [
          { label: "Subsección 1.1: Que es adobe indesign" },
          { label: "Subsección 1.2: Funciones" }
        ]
      },
      {
        label: "Sección 2",
        children: [
          { label: "Subsección 2.1" },
          { label: "Subsección 2.2" }
        ]
      },
      { label: "Sección 3" }
    ];
  

    renderTree(tree, treeData);
  });
  
  function renderTree(container, data) {
    const ul = document.createElement("ul");
    container.appendChild(ul);
  
    data.forEach(node => {
      const li = document.createElement("li");
      const label = document.createElement("span");
      label.textContent = node.label;
      li.appendChild(label);
  
      if (node.children && node.children.length > 0) {
        li.classList.add("collapsed");
        renderTree(li, node.children);
        label.addEventListener("click", () => toggleNode(li));
      }
  
      ul.appendChild(li);
    });
  }
  
  function toggleNode(node) {
    node.classList.toggle("collapsed");
  }
  