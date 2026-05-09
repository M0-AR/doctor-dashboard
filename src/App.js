import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const ForceBipolar3D = () => {
  const mountRef = useRef(null);
  const [jawAngle, setJawAngle] = useState(0);
  const [wristAngleX, setWristAngleX] = useState(0);
  const [wristAngleY, setWristAngleY] = useState(0);
  const [shaftRotation, setShaftRotation] = useState(0);

  useEffect(() => {
    let scene, camera, renderer, controls;
    let instrument, jaws, wristJoint, shaft;

    // Scene setup
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Camera position
    camera.position.z = 5;

    // Controls
    controls = new OrbitControls(camera, renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    scene.add(directionalLight);

    // Create instrument
    instrument = new THREE.Group();

    // Shaft
    const shaftGeometry = new THREE.CylinderGeometry(0.05, 0.05, 4, 32);
    const shaftMaterial = new THREE.MeshPhongMaterial({ color: 0x888888 });
    shaft = new THREE.Mesh(shaftGeometry, shaftMaterial);
    instrument.add(shaft);

    // Wrist Joint
    const wristJointGeometry = new THREE.SphereGeometry(0.1, 32, 32);
    const wristJointMaterial = new THREE.MeshPhongMaterial({ color: 0x666666 });
    wristJoint = new THREE.Mesh(wristJointGeometry, wristJointMaterial);
    wristJoint.position.y = 2;
    instrument.add(wristJoint);

    // Jaws
    jaws = new THREE.Group();
    const jawGeometry = new THREE.BoxGeometry(0.1, 0.5, 0.05);
    const jawMaterial = new THREE.MeshPhongMaterial({ color: 0xaaaaaa });
    const leftJaw = new THREE.Mesh(jawGeometry, jawMaterial);
    const rightJaw = new THREE.Mesh(jawGeometry, jawMaterial);
    leftJaw.position.set(-0.05, 0.25, 0);
    rightJaw.position.set(0.05, 0.25, 0);
    jaws.add(leftJaw);
    jaws.add(rightJaw);
    jaws.position.y = 2.25;
    wristJoint.add(jaws);

    scene.add(instrument);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Update function
    const updateInstrument = () => {
      shaft.rotation.y = (shaftRotation * Math.PI) / 180;
      wristJoint.rotation.x = (wristAngleX * Math.PI) / 180;
      wristJoint.rotation.y = (wristAngleY * Math.PI) / 180;
      jaws.children[0].rotation.z = (-jawAngle * Math.PI) / 180;
      jaws.children[1].rotation.z = (jawAngle * Math.PI) / 180;
    };

    // Cleanup function
    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  // Update instrument when state changes
  useEffect(() => {
    const updateInstrument = () => {
      if (mountRef.current.children[0]) {
        const scene = mountRef.current.children[0].scene;
        if (scene) {
          const instrument = scene.children.find(
            (child) => child.type === "Group"
          );
          if (instrument) {
            const shaft = instrument.children[0];
            const wristJoint = instrument.children[1];
            const jaws = wristJoint.children[0];

            shaft.rotation.y = (shaftRotation * Math.PI) / 180;
            wristJoint.rotation.x = (wristAngleX * Math.PI) / 180;
            wristJoint.rotation.y = (wristAngleY * Math.PI) / 180;
            jaws.children[0].rotation.z = (-jawAngle * Math.PI) / 180;
            jaws.children[1].rotation.z = (jawAngle * Math.PI) / 180;
          }
        }
      }
    };
    updateInstrument();
  }, [jawAngle, wristAngleX, wristAngleY, shaftRotation]);

  return (
    <div className="flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">
        Force Bipolar from da Vinci Instruments
      </h2>
      <div ref={mountRef} className="w-full h-96 mb-4" />
      <div className="mt-4 space-y-2 w-full max-w-xs">
        <label className="block">
          Jaw Opening:
          <input
            type="range"
            min="0"
            max="45"
            value={jawAngle}
            onChange={(e) => setJawAngle(Number(e.target.value))}
            className="w-full"
          />
        </label>
        <label className="block">
          Wrist Angle X:
          <input
            type="range"
            min="-90"
            max="90"
            value={wristAngleX}
            onChange={(e) => setWristAngleX(Number(e.target.value))}
            className="w-full"
          />
        </label>
        <label className="block">
          Wrist Angle Y:
          <input
            type="range"
            min="-90"
            max="90"
            value={wristAngleY}
            onChange={(e) => setWristAngleY(Number(e.target.value))}
            className="w-full"
          />
        </label>
        <label className="block">
          Shaft Rotation:
          <input
            type="range"
            min="0"
            max="360"
            value={shaftRotation}
            onChange={(e) => setShaftRotation(Number(e.target.value))}
            className="w-full"
          />
        </label>
      </div>
    </div>
  );
};

export default ForceBipolar3D;
