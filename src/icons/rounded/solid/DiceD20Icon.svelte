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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M15.2 11 12 16.113 8.805 11Zm-5.183 5.706L6.944 11.8 3.83 16.158Zm7.235-8.353 4.7-2.819a4.978 4.978 0 0 0-1.372-1.222l-6-3.6A4.99 4.99 0 0 0 12.712.05c.066.062 4.535 8.303 4.535 8.303ZM15.323 9 12 2.848 8.677 9Zm1.733 2.8L14 16.688l6.167-.534ZM6.753 8.353S11.222.112 11.288.05a5 5 0 0 0-1.861.663l-6 3.6a4.978 4.978 0 0 0-1.372 1.221Zm11.524 1.714 4.6 6.446A4.979 4.979 0 0 0 23 15.4V8.6a4.965 4.965 0 0 0-.165-1.267ZM13 18.781V23.9a5.015 5.015 0 0 0 1.573-.614l6-3.6a5 5 0 0 0 1.719-1.732c-.066.022-9.292.827-9.292.827Zm-7.277-8.714L1.165 7.333A4.965 4.965 0 0 0 1 8.6v6.8a4.979 4.979 0 0 0 .127 1.113c.018-.032 4.596-6.446 4.596-6.446ZM11 18.8s-9.227-.825-9.292-.845a5 5 0 0 0 1.719 1.732l6 3.6A5.015 5.015 0 0 0 11 23.9Z"/></svg>
  