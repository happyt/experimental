(t = [(N = 0)]),
  (draw = (a) => {
    N || createCanvas((W = 400), W),
      background(0),
      (t[N++ % (n = 200)] = [
        (f = (r = random)(W)),
        (g = r(W)),
        W - f,
        W,
        f,
        g,
      ]),
      t.find((a) => {
        t.find(([, , , , n, r]) => {
          (m = mag((x = a[4] - n), (y = a[5] - r)) + 1),
            m < 50 &&
              (stroke(a),
              line((a[4] += cos((B = atan2(y, x)))), (a[5] += sin(B)), n, r));
        }),
          circle(a[4], a[5], 4);
      });
  }); //#つぶやきProcessing
`