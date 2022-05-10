ssconst mystyle={
    background: 'linear-gradient(to right, #c2fcce 60%,white 40%)',
    height: '100vh'
  }
  
  
  
  function Home() {
    return (
      <div style={mystyle}>
        <div className='style'>
          <h1>
            Welcome to<br></br>
            <span style={{color:'#ff6912'}}>Crystal Delta</span><br></br>
            e-learinig
          </h1>
        </div>
        <div className='login'>
        <form style={{padding:'20px'}}>
      <div class="form-group">
        <br></br>
        <label for="exampleInputEmail1">Email address</label><br></br>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
      </div><br></br>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
      </div>
      <br></br>
      <button type="submit" class="btn btn-info">Submit</button>
      </form>
          </div>
      </div>
    );
  }
  
  export default Home;