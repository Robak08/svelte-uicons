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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23.988 6.412c-.107 2.341-1.739 5.546-4.895 9.614-3.263 4.249-6.024 6.374-8.282 6.374-1.399 0-2.583-1.294-3.55-3.882l-1.937-7.117c-.718-2.587-1.488-3.882-2.311-3.882-.18 0-.808.379-1.883 1.133L0 7.195a305.624 305.624 0 0 0 3.503-3.129c1.58-1.368 2.766-2.087 3.556-2.16 1.868-.18 3.018 1.099 3.449 3.838.466 2.955.789 4.792.97 5.511.538 2.451 1.131 3.675 1.778 3.675.502 0 1.257-.795 2.263-2.385 1.005-1.59 1.543-2.8 1.616-3.631.143-1.372-.395-2.06-1.616-2.06-.575 0-1.167.132-1.776.394 1.179-3.871 3.433-5.751 6.759-5.644 2.466.073 3.628 1.675 3.486 4.808z"/></svg>
  