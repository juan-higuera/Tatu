import "./PerfilUser.css";
import { TbNut } from "react-icons/tb";
import { MdPhotoCamera } from "react-icons/md";
import { useRef } from "react";
function PerfilUser() {

  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    console.log(e.target.files)
  }


  const handleUploadFile = () => {
    console.log('yeah')
    fileInputRef.current.click();
  }

  return (
    <div className="container_perfilUser">
      <div className="content_perfilUser">
        <div className="seccion_info_perfilUser">
          <div className="container-img-perfilUser">
            <button onClick={handleUploadFile}>
            <img src="./../../public/img/user_default2.png" alt="" />
            <MdPhotoCamera className="img-photo" color="#fff" />
            </button>
            <form action="">
              <input type="file" name="photo-perfil" ref={fileInputRef} onChange={handleFileChange} />
            </form>
          </div>
          <div className="section_container_perfilUser">
            <div className="items_perfilUser">
              <div className="item">
                <div className="btn-info-account">
                <span>mikeki</span>
                </div>
                <div className="btn_edit_perfil">
                  <a href="#">Editar perfil</a>
                </div>
                <div className="btn-config">
                <TbNut fontSize={25}/>
              </div>
              </div>
              
            </div>
            <div className="list_describe_perfilUser">
              <ul>
                <li>
                  <div className="item_content">
                    <span className="num">0</span>
                    <span className="describe_item">Publicaciones</span>
                  </div>
                </li>
                <li>
                  <div className="item_content">
                    <span className="num">0</span>
                    <div className="describe_item"><span>
                      Seguidores</span></div>
                  </div>
                </li>
                <li>
                  <div className="item_content">
                    <span className="num">0</span>
                    <div className="describe_item"><span>
                    Seguidos</span></div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PerfilUser;
