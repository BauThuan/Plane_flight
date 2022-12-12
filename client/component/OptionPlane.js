
import{useState} from 'react';
import './OptionPl';

function OptionPlane() {
  const [css , setCss] = useState({})
  const [css_1 , setCss_1] = useState()
  const handleClick = () => {
   var alet = confirm("Bạn có đồng ý đăng ký hạng mục này ?")
   if(alet == true){
    setCss({background:"red"})
    alert("Chúc mừng bạn đăng ký thành công !")
   }else{
    alert("Chúc mừng bạn hủy thành công !")
    setCss({backfround:"#FFD700"})
   }
  }
  const hanldeClicked = () =>{
    alert("Chúc mừng bạn đăng ký thành công !")
    setCss({background:"green"})
  }
  return (
    <div className="div-big">
      <table className="table-max" border="1" width="30%" cellpadding="10" cellspacing="10">
        <tr>
          <th colspan="4" className="demo-plane"></th>
        </tr>
        <tr>
          <th colspan="4" className="demo-plane"></th>
        </tr>
        <tr>
          <th colspan="4" className="demo-plane"></th>
        </tr>
        <tr>
          <th colspan="4" className="plane-icon">AIRCRAFT HEAD</th>
        </tr>
        <tr>
            <th colspan="4" className="col-num">A</th>
        </tr>
        <tr>
          <td onClick={() => handleClick()} style={css} className="table-number">01</td>
          <td className="table-number" onClick={() => handleClick()} style={css}>02</td>
          <td className="table-number" onClick={() => handleClick()} style={css}>03</td>
          <td className="table-number" onClick={() => handleClick()} style={css}>04</td>
          
        </tr>
        <tr>
          <td className="table-number" onClick={() => handleClick()} style={css}>05</td>
          <td className="table-number" onClick={() => handleClick()} style={css}>06</td>
          <td className="table-number" onClick={() => handleClick()} style={css}>07</td>
          <td className="table-number" onClick={() => handleClick()} style={css}>08</td>
        </tr>
        <tr>
          <td className="table-number" onClick={() => handleClick()} style={css}>09</td>
          <td className="table-number" onClick={() => handleClick()} style={css}>10</td>
          <td className="table-number" onClick={() => handleClick()} style={css}>11</td>
          <td className="table-number" onClick={() => handleClick()} style={css}>12</td>
        </tr>
        <tr>
          <td className="table-number" onClick={() => handleClick()} style={css}>13</td>
          <td className="table-number" onClick={() => handleClick()} style={css}>14</td>
          <td className="table-number" onClick={() => handleClick()} style={css}>15</td>
          <td className="table-number" onClick={() => handleClick()} style={css}>16</td>
        </tr>
        <tr>
          <th colspan="4" className="plane-icon">FUSELAGE</th>
        </tr>
        <tr>
            <th colspan="4" className="col-num">B</th>
        </tr>
        <tr>
          <td className="table-number-1" onClick={() => handleClick()} style={css}>17</td>
          <td className="table-number-1" onClick={() => handleClick()} style={css}>18</td>
          <td className="table-number-1" onClick={() => handleClick()} style={css}>19</td>
          <td className="table-number-1" onClick={() => handleClick()} style={css}>20</td>
        </tr>
        <tr>
          <td className="table-number-1" onClick={() => handleClick()} style={css}>21</td>
          <td className="table-number-1" onClick={() => handleClick()} style={css}>22</td>
          <td className="table-number-1" onClick={() => handleClick()} style={css}>23</td>
          <td className="table-number-1" onClick={() => handleClick()} style={css}>24</td>
        </tr>
        <tr>
          <td className="table-number-1" onClick={() => handleClick()} style={css}>25</td>
          <td className="table-number-1" onClick={() => handleClick()} style={css}>26</td>
          <td className="table-number-1" onClick={() => handleClick()} style={css}>27</td>
          <td className="table-number-1" onClick={() => handleClick()} style={css}>28</td>
        </tr>
        <tr>
          <td className="table-number-1" onClick={() => handleClick()} style={css}>29</td>
          <td className="table-number-1" onClick={() => handleClick()} style={css}>30</td>
          <td className="table-number-1" onClick={() => handleClick()} style={css}>31</td>
          <td className="table-number-1" onClick={() => handleClick()} style={css}>32</td>
        </tr>
        <tr>
          <td className="table-number-1" onClick={() => handleClick()} style={css}>33</td>
          <td className="table-number-1" onClick={() => handleClick()} style={css}>34</td>
          <td className="table-number-1" onClick={() => handleClick()} style={css}>35</td>
          <td className="table-number-1" onClick={() => handleClick()} style={css}>36</td>
        </tr>
        <tr>
          <td className="table-number-1" onClick={() => handleClick()} style={css}>37</td>
          <td className="table-number-1" onClick={() => handleClick()} style={css}>38</td>
          <td className="table-number-1" onClick={() => handleClick()} style={css}>39</td>
          <td className="table-number-1" onClick={() => handleClick()} style={css}>40</td>
        </tr>
        <tr>
          <th colspan="4" className="plane-icon">TAIL PLANE</th>
        </tr>
        <tr>
            <th colspan="4" className="col-num">C</th>
        </tr>
        <tr>
          <td className="table-number-2" onClick={() => handleClick()} style={css}>41</td>
          <td className="table-number-2" onClick={() => handleClick()} style={css}>42</td>
          <td className="table-number-2" onClick={() => handleClick()} style={css}>43</td>
          <td className="table-number-2" onClick={() => handleClick()} style={css}>44</td>
        </tr>
        <tr>
          <td className="table-number-2" onClick={() => handleClick()} style={css}>45</td>
          <td className="table-number-2" onClick={() => handleClick()} style={css}>46</td>
          <td className="table-number-2" onClick={() => handleClick()} style={css}>47</td>
          <td className="table-number-2" onClick={() => handleClick()} style={css}>48</td>
        </tr>
        <tr>
          <td className="table-number-2" onClick={() => handleClick()} style={css}>49</td>
          <td className="table-number-2" onClick={() => handleClick()} style={css}>50</td>
          <td className="table-number-2" onClick={() => handleClick()} style={css}>51</td>
          <td className="table-number-2" onClick={() => handleClick()} style={css}>52</td>
        </tr>
        <tr>
          <td className="table-number-2" onClick={() => handleClick()} style={css}>53</td>
          <td className="table-number-2" onClick={() => handleClick()} style={css}>54</td>
          <td className="table-number-2" onClick={() => handleClick()} style={css}>55</td>
          <td className="table-number-2" onClick={() => handleClick()} style={css}>56</td>
        </tr>
        <tr>
          <td className="table-number-2" onClick={() => handleClick()} style={css}>57</td>
          <td className="table-number-2" onClick={() => handleClick()} style={css}>58</td>
          <td className="table-number-2" onClick={() => handleClick()} style={css}>59</td>
          <td className="table-number-2" onClick={() => handleClick()} style={css}>60</td>
        </tr>
        <tr>
          <td className="table-number-2" onClick={() => handleClick()} style={css}>61</td>
          <td className="table-number-2" onClick={() => handleClick()} style={css}>62</td>
          <td className="table-number-2" onClick={() => handleClick()} style={css}>63</td>
          <td className="table-number-2" onClick={() => handleClick()} style={css}>64</td>
        </tr>
        <tr>
          <td className="table-number-3" onClick={() => handleClick()} style={css}>65</td>
          <td className="table-number-3" onClick={() => handleClick()} style={css}>66</td>
          <td className="table-number-3" onClick={() => handleClick()} style={css}>67</td>
          <td className="table-number-3" onClick={() => handleClick()} style={css}>68</td>
        </tr>
        <tr>
          <td className="table-number-3" onClick={() => handleClick()} style={css}>69</td>
          <td className="table-number-3" onClick={() => handleClick()} style={css}>70</td>
          <td className="table-number-3" onClick={() => handleClick()} style={css}>71</td>
          <td className="table-number-3" onClick={() => handleClick()} style={css}>72</td>
        </tr>
        <tr>
          <td className="table-number-2" onClick={() => handleClick()} style={css}>73</td>
          <td className="table-number-2" onClick={() => handleClick()} style={css}>74</td>
          <td className="table-number-2" onClick={() => handleClick()} style={css}>75</td>
          <td className="table-number-2" onClick={() => handleClick()} style={css}>76</td>
        </tr>
      </table>

      <table border="1" className="table-2" cellpadding="10" cellspacing="10">
          <tr>
            <td className="yl-1"></td>
            <td className="name-chuthich">Thương gia(A)</td>
          </tr>
          <tr>
            <td className="gr-2"></td>
            <td className="name-chuthich">Phổ thông đặc biệt (B)</td>
          </tr>
          <tr>
            <td className="gr-3"></td>
            <td className="name-chuthich">Phổ thông (C)</td>
          </tr>
          <tr>
            <td className="rd-4"></td>
            <td className="name-chuthich">Ghế đã được đặt</td>
          </tr>
          <tr>
            <td className ="pk-5"></td>
            <td className="name-chuthich">Khu vực gần nối thoát hiểm</td>
          </tr>
      </table> 
      <div className ="div-1">
          <div>
            <span className="chil-age">Trẻ em dưới 2 tuổi: </span>
            <select className="opt-number">
              {/* <input className="ipt-children" type="text"  /> */}
              <option></option>
              <option>0 người</option>
              <option>1 người</option>
              <option>2 người</option>
              <option>3 người</option>
              <option>4 người</option>
              <option>5 người</option>
              <option>6 người</option>
              <option>7 người</option>
              <option>8 người</option>
              <option>9 người</option>
            </select>
          </div>
          <div>
            <span className="chil-age">Trẻ em từ 2 đến 12 tuổi: </span>
            <select className="opt-number-1">
              {/* <input className="ipt-children" type="text"  /> */}
              <option></option>
              <option>0 người</option>
              <option>1 người</option>
              <option>2 người</option>
              <option>3 người</option>
              <option>4 người</option>
              <option>5 người</option>
              <option>6 người</option>
              <option>7 người</option>
              <option>8 người</option>
              <option>9 người</option>
            </select>
          </div>
          <div>
            <button className="btn-ins" onClick={() => hanldeClicked()}>Đặt</button>
          </div>
      </div>
    </div>
  );
}

export default OptionPlane;