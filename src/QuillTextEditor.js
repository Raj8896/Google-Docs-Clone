import Quill from 'quill';
import "quill/dist/quill.snow.css";
import React, { useCallback} from 'react'

export default function QuillTextEditor() {
    const FontAttributor = Quill.import('attributors/class/font');
FontAttributor.whitelist = [
  'Arial',
  'roboto',
  'cursive',
  'fantasy',
  'monospace'
];
Quill.register(FontAttributor, true);

    var toolbarOptions = [
        
        [{
          'header': [1, 2, 3, 4, 5, 6, false]
        }],
        [{ 'font' : []
        }],
        [{ 'size': [] }],
        ['bold', 'italic', 'underline'],
        [{
            'color': []
          }, {
            'background': []
          }], // toggled buttons
        ['blockquote', 'code-block'],
    
        // custom button values
        [{
          'list': 'ordered'
        }, {
          'list': 'bullet'
        }],
        [{
          'script': 'sub'
        }, {
          'script': 'super'
        }], // superscript/subscript
        [{
          'indent': '-1'
        }, {
          'indent': '+1'
        }], // outdent/indent
        [{
          'direction': 'rtl'
        }], // text direction
        
        [{
          'align': []
        }],
        ['link','comment', 'image'],
    
        ['clean'] // remove formatting button
      ];
    
   
        
        const wrapperRef= useCallback((wrapper)=>{
            if(wrapper == null)
                return
            wrapper.innerHTML = ''
            const editor = document.createElement('div');
            wrapper.append(editor);
            new Quill(editor,{theme:"snow",modules:{toolbar:toolbarOptions}});
        },[])
      return (
        <div className='container absolute ' ref={wrapperRef}></div>
      )
}
