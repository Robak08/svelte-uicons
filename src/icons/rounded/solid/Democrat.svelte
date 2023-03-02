<script>
  export let size = "100%";
  export let strokeWidth = 0;
  let customClass = "";
  export { customClass as class };
  
  if (size !== "100%") {
    size = size.slice(-1) === 'x' 
    ? size.slice(0, size.length -1) + 'em'
    : parseInt(size) + 'px';
  }
  </script>
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M6 16h16.003l-.002 3.005c-.105 3.941-5.87 3.953-5.988.013L11.988 19a2.942 2.942 0 0 1-.868 2.119c-1.776 1.892-5.198.487-5.119-2.116V16Zm17.752-5.341a1 1 0 0 1-1.411.093l-.335-.294L22.004 14H5.735l-.92-3.876c-1.772.81-2.783 1.332-4.132.173A2.332 2.332 0 0 1 .683 7l2.798-3.735c.156-.188.332-.353.519-.502V2C4.006.692 5.994.693 6 2v.019c.334-.05.674.018 1 .094V2C7.006.692 8.994.693 9 2v1.25L11.333 5h5.672c1.472 0 2.784.652 3.7 1.669.01.008.022.01.031.018l2.922 2.561a1 1 0 0 1 .093 1.411ZM8.956 3.217l.005.003c-.002-.008-.003-.01-.005-.003ZM10 10c-.006-1.308-1.994-1.308-2 0 .006 1.308 1.994 1.308 2 0Zm4 0c-.006-1.308-1.994-1.308-2 0 .006 1.308 1.994 1.308 2 0Zm4 0c-.006-1.308-1.994-1.308-2 0 .006 1.308 1.994 1.308 2 0Z"/></svg>
  